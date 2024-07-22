"use client";

import { useModalDispatch, useModalState } from "@/provider/ModalsProvider";

const CustomModals = () => {
  const openedModals = useModalState();
  const { close } = useModalDispatch();

  return (
    <>
      {openedModals.map((modalInfo, index) => {
        const { Component, props, isOpen } = modalInfo;
        const onClose = () => {
          close(Component);
        };
        return <Component key={index} isOpen={isOpen} onClose={onClose} {...props} />;
      })}
    </>
  );
};

export default CustomModals;
