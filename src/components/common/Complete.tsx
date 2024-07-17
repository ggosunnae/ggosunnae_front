"use client";
import { MouseEventHandler } from "react";

const Complete = ({
  check,
  onClick,
  type,
  children,
}: {
  type?: "button" | "submit" | "reset";
  check: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-11 w-full rounded-[10px] text-base font-medium leading-6 transition-colors ${check ? "bg-primary-normalBlue text-white" : "bg-grayscale-gray4 text-[#666]"}`}
    >
      {children}
    </button>
  );
};

export default Complete;
