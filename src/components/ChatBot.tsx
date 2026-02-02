"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "react-hot-toast";
import { useChatBot } from "@/contexts/ChatBotContext";

const ChatBot: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useChatBot();

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-gradient-to-t from-red-600 to-red-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 group"
      >
        <div className="flex items-center gap-2">
          <img src="/chat.png" alt="chat" className="w-6 h-6" />
          <span className="hidden md:inline font-medium">Text Our Experts</span>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Very subtle background overlay - click to close */}
          <div 
            className="fixed inset-0 bg-transparent z-40"
            onClick={closeModal}
          ></div>
          
          {/* Modal positioned at bottom-right */}
          <div className="fixed bottom-20 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Need help? Text us.</h3>
                    <p className="text-sm opacity-90">
                      Enter your contact info, and our team will text you back as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 transition-colors ml-2 flex-shrink-0"
                  >
                    <img src="/close.png" alt="close" className="w-6 h-6 invert" />
                  </button>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="max-h-[60vh] overflow-y-auto">
                <ContactForm isModal={true} onClose={closeModal} />
              </div>
            </div>
          </div>
        </>
      )}
      
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
    </>
  );
};

export default ChatBot;
