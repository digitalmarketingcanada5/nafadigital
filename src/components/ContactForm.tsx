"use client";

import React, { useState } from "react";
import MaterialIcon from "@/components/MaterialIcon";
import { sendContactEmail, ContactFormData } from "@/lib/actions/sendEmail";
import toast from "react-hot-toast";

interface ContactFormProps {
  isModal?: boolean;
  onClose?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isModal = false, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    hearAboutUs: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Split name into first and last name for email purposes
    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const submissionData = {
      ...formData,
      firstName,
      lastName,
    };

    try {
      const result = await sendContactEmail(submissionData);

      if (result.error) {
        toast.error(result.error, {
          style: {
            fontSize: '16px',
            fontWeight: '500',
            padding: '16px 20px',
            minWidth: '350px',
          },
        });
      } else {
        toast.success("Message sent successfully! We'll get back to you soon.", {
          style: {
            fontSize: '16px',
            fontWeight: '500',
            padding: '16px 20px',
            minWidth: '350px',
          },
          duration: 5000, // Show for 5 seconds instead of default 4
        });
        // Reset form
        setFormData({
          name: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiryType: "",
          hearAboutUs: "",
          message: "",
        });
        if (isModal && onClose) {
          onClose();
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`card relative rounded-3xl overflow-hidden bg-gray-50 w-full text-black ${isModal ? 'p-4' : 'p-8 shadow-lg max-w-lg mx-auto'}`}>
      {/* Remove the close button when in modal mode since header already has one */}
      {!isModal && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <img src="/close.png" alt="close" className="w-6 h-6" />
        </button>
      )}
      <p className={`font-bold ${isModal ? 'text-2xl mb-4' : 'text-3xl md:mb-8'}`}>Get Started</p>
      <form onSubmit={handleSubmit}>
        <div className={`grid gap-x-4 ${isModal ? 'grid-cols-1 gap-y-3' : 'md:grid-cols-2'}`}>
          <div className={isModal ? 'mb-3' : 'mb-4'}>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className={isModal ? 'mb-3' : 'mb-4'}>
            <label className="block text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className={`${isModal ? 'mb-3' : 'mb-4'} ${isModal ? '' : 'md:col-span-2'}`}>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="yourmail@gmail.com"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <div className={isModal ? 'mb-3' : 'mb-4'}>
            <label className="block text-sm font-medium text-gray-700">
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Please Select</option>
              <option value="Lead Generation">Lead Generation</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO Services">SEO Services</option>
              <option value="Web Development">Web Development</option>
              <option value="Consultation">Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={isModal ? 'mb-3' : 'mb-4'}>
            <label className="block text-sm font-medium text-gray-700">
              How Did You Hear About Us? <span className="text-red-500">*</span>
            </label>
            <select
              name="hearAboutUs"
              value={formData.hearAboutUs}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Please Select</option>
              <option value="Google Search">Google Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Website">Website</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={`${isModal ? 'mb-3' : 'mb-4'} ${isModal ? '' : 'md:col-span-2'}`}>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm h-24 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-max block no-underline rounded-full bg-gradient-to-t from-red-600 to-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="group transition-all text-lg text-white font-bold px-7 py-3 flex items-center gap-2 rounded-full ease-in-out duration-300 shadow-xl hover:bg-red-400 disabled:hover:bg-gradient-to-t disabled:hover:from-red-600 disabled:hover:to-red-500">
            {isSubmitting ? "Sending..." : "Submit"}
            {!isSubmitting && (
              <img src="/right-up.png" alt="chat" className="w-6 h-6" />
            )}
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
