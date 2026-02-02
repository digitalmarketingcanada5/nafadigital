"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ChatBotContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ChatBotContext = createContext<ChatBotContextType | undefined>(undefined);

export const useChatBot = () => {
  const context = useContext(ChatBotContext);
  if (context === undefined) {
    throw new Error("useChatBot must be used within a ChatBotProvider");
  }
  return context;
};

interface ChatBotProviderProps {
  children: ReactNode;
}

export const ChatBotProvider: React.FC<ChatBotProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ChatBotContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ChatBotContext.Provider>
  );
};
