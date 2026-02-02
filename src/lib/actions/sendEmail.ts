"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const EMAIL_CONFIG = {
  // Use test mode only when explicitly set, not based on NODE_ENV
  isTestMode: process.env.EMAIL_TEST_MODE === 'true',
  testRecipient: 'delivered@resend.dev', // Resend's official test address
  productionRecipient: process.env.CONTACT_EMAIL || 'digitalmarketingcanada5@gmail.com',
  sender: process.env.EMAIL_FROM || 'Agency Contact Form <onboarding@resend.dev>',
};

export interface ContactFormData {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  inquiryType: string;
  hearAboutUs: string;
  message: string;
}

// Simple validation function
const validateString = (value: string, maxLength: number): boolean => {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
};

const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }
  return message;
};

export const sendContactEmail = async (formData: ContactFormData) => {
  const {
    name,
    firstName,
    lastName,
    email,
    phone,
    inquiryType,
    hearAboutUs,
    message,
  } = formData;

  // Server-side validation
  if (!validateString(name, 100)) {
    return {
      error: "Invalid name",
    };
  }
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email address",
    };
  }
  if (!validateString(phone, 50)) {
    return {
      error: "Invalid phone number",
    };
  }
  if (!validateString(inquiryType, 100)) {
    return {
      error: "Please select an inquiry type",
    };
  }
  if (!validateString(hearAboutUs, 100)) {
    return {
      error: "Please select how you heard about us",
    };
  }
  if (message && !validateString(message, 5000)) {
    return {
      error: "Message is too long",
    };
  }

  let data;
  try {
    // Determine recipient based on environment
    const recipient = EMAIL_CONFIG.isTestMode 
      ? EMAIL_CONFIG.testRecipient 
      : EMAIL_CONFIG.productionRecipient;

    console.log(`Sending email in ${EMAIL_CONFIG.isTestMode ? 'TEST' : 'PRODUCTION'} mode to: ${recipient}`);

    data = await resend.emails.send({
      from: EMAIL_CONFIG.sender,
      to: recipient,
      subject: `New Contact Form Submission from ${firstName || name} ${lastName || ''}`.trim(),
      replyTo: email,
      react: React.createElement(ContactFormEmail, {
        name,
        firstName,
        lastName,
        email,
        phone,
        inquiryType,
        hearAboutUs,
        message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
    success: true,
  };
};
