"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface DepthsT {
  key: string;
  name: string;
}

interface ModalContextProps {
  isOpen: boolean;
  title: string;
  depths: DepthsT[];
  openModal: () => void;
  closeModal: () => void;
  setTitle: (title: string) => void;
  setDepths: Dispatch<SetStateAction<DepthsT[]>>;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  title: "",
  depths: [],
  openModal: () => {},
  closeModal: () => {},
  setTitle: () => {},
  setDepths: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [depths, setDepths] = useState<DepthsT[]>([]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        title,
        setTitle,
        depths,
        setDepths,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
