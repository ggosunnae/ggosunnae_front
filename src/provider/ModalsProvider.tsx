"use client";
import CustomModals from "@/components/Modal/CustomModal";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface ModalItem {
  Component: React.ComponentType<any>;
  props: any;
  isOpen: boolean;
}

interface ModalsDispatchContextType {
  open: (Component: React.ComponentType<any>, props: any) => void;
  close: (Component: React.ComponentType<any>) => void;
  updateProps: (Component: React.ComponentType<any>, ...rest: any) => void;
}

const ModalsStateContext = createContext<ModalItem[]>([]);

const ModalsDispatchContext = createContext<ModalsDispatchContextType>({
  open: () => {},
  close: () => {},
  updateProps: () => {},
});

export const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [openedModals, setOpenedModals] = useState<ModalItem[]>([]);

  const open = (Component: React.ComponentType<any>, props: any) => {
    setOpenedModals((prev) => {
      return [
        ...prev,
        {
          Component,
          props,
          isOpen: true,
        },
      ];
    });
  };

  const close = (Component: React.ComponentType<any>) => {
    setOpenedModals((prev) => {
      return prev.filter((modal) => modal.Component !== Component);
    });
  };

  const updateProps = (Component: React.ComponentType<any>, newProps: any) => {
    setOpenedModals((prev) =>
      prev.map((modal) =>
        modal.Component === Component
          ? { ...modal, props: { ...modal.props, ...newProps } }
          : modal,
      ),
    );
  };

  const dipatch = useMemo(() => ({ open, close, updateProps }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dipatch}>
        {children}
        <CustomModals />
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
};

export const useModalState = () => useContext(ModalsStateContext);
export const useModalDispatch = () => useContext(ModalsDispatchContext);
