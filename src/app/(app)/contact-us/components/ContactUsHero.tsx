"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "react-hot-toast";

const ContactUsHero: React.FC = () => {
  return (
    <section className="relative w-full pt-[76px] bg-gradient-to-b from-red-600 to-red-500 text-white overflow-hidden">
      <div className="container px-12 xl:pb-0 pb-12 flex items-stretch justify-center relative z-[1] gap-8 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row sm:gap-16">
          <div className="flex flex-col gap-8 w-full lg:w-1/2 pt-8 sm:pt-0 justify-center text-left">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-snug">
              Contact Us
            </h1>
            <div>
              <p className="mb-4">
                We simplify lead generation so you can focus on growing your
                business. Our internet marketing experts are always available to
                assist you with any of your issues, needs or requests. Even if
                you&apos;re just looking for some friendly advice, please
                don&apos;t hesitate to contact us or give us a call.
              </p>
              <p>
                You are under no obligation to make a purchase and we keep your
                personal information private and confidential.{" "}
                <a href="/privacy-policy" className="underline">
                  View our privacy policy.
                </a>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            fontSize: '16px',
            fontWeight: '500',
            padding: '16px 20px',
            minWidth: '350px',
          },
          success: {
            style: {
              backgroundColor: '#10B981',
              color: 'white',
            },
            duration: 5000,
          },
          error: {
            style: {
              backgroundColor: '#EF4444',
              color: 'white',
            },
            duration: 5000,
          },
        }}
      />
    </section>
  );
};

export default ContactUsHero;
