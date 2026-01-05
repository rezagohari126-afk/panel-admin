import { createContext, useContext, useState } from "react";

// Context
const SidebarContext = createContext();

// Provider
export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export function useSidebar() {
  return useContext(SidebarContext);
}
