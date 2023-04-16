import React, { createContext, useState } from 'react';
import { IModalWindowContext } from './interface';

export const ModalWindowContext = createContext<IModalWindowContext>({
  window: false,
  openWindow: () => {},
  closeWindow: () => {},
});

export const ModalWindowState = ({ children }: { children: React.ReactNode }) => {
  const [window, setWindow] = useState(false);

  const openWindow = () => {
    setWindow(true);
  };

  const closeWindow = () => {
    setWindow(false);
  };

  return (
    <ModalWindowContext.Provider value={{ window, openWindow, closeWindow }}>
      {children}
    </ModalWindowContext.Provider>
  );
};
