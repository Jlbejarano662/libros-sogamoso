import React, { useState, createContext } from "react";
// create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);
  // event to close sidebar
  const handleClose = () => {
    setIsOpen(false);
  };
  // return methods and data about sidebar
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
