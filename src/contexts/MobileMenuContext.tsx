import { createContext, useContext, useState, ReactNode } from 'react';

interface MobileMenuContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider');
  }
  return context;
};

interface MobileMenuProviderProps {
  children: ReactNode;
}

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen, toggleMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};