"use client";

import { MouseEventHandler } from "react";

interface CompleteT {
  /**
   * type은 버튼 타입을 의미 합니다. "button" | "submit" | "reset" 가 들어갈 수 있습니다.
   */
  type?: "button" | "submit" | "reset";
  /**
   * 활성화 상태를 의미 합니다. true일 경우 활성화 상태가 됩니다.
   */
  check?: boolean;
  /**
   * onClick 함수가 들어갑니다.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Complete = ({ check, onClick, type, children }: CompleteT) => {
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
