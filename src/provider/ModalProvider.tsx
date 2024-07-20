"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface DepthsT {
  key: string;
  name: string;
}

interface ModalStateContextProps {
  isOpen: boolean;
  content: ReactNode | null;
  title?: string;
}

interface ModalProviderContextProps {
  openModal: (content: ReactNode, title?: string) => void;
  closeModal: () => void;
}

const ModalStateContext = createContext<ModalStateContextProps>({
  isOpen: false,
  content: null,
});
const ModalDispatchContext = createContext<ModalProviderContextProps>({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalStateContextProps>({
    isOpen: false,
    content: null,
    title: undefined,
  });

  const openModal = (content: ReactNode, title?: string) => {
    setModalState({ isOpen: true, content, title });
  };
  const closeModal = () => {
    setModalState({ isOpen: false, content: null, title: undefined });
  };

  return (
    <ModalStateContext.Provider value={modalState}>
      <ModalDispatchContext.Provider value={{ openModal, closeModal }}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export const useModalState = () => useContext(ModalStateContext);
export const useModalDispatch = () => useContext(ModalDispatchContext);
