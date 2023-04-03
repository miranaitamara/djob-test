import React, { createContext, useState } from "react";

export interface MessageInputContextType {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageInputContext = createContext<MessageInputContextType>(
  {} as any
);

export const MessageInputProvider = ({ children }: any) => {
  const [message, setMessage] = useState<string>("");

  return (
    <MessageInputContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageInputContext.Provider>
  );
};
