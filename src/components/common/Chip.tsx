"use client";
import { MouseEventHandler } from "react";

interface ChipT {
  /**
   * 타입은 마우스 커서를 의미 합니다. button을 경우 point가 되고 default일 기본 커서 입니다.
   * 기본값은 default 입니다.
   */
  type?: "button" | "default";
  /**
   * 버튼이 활성화 되어있는것을 지정합니다. label가 동일하면 활성화 상태가 됩니다.
   */
  active?: string;
  /**
   * 버튼에 들어갈 텍스트를 입력합니다.
   */
  label?: string;
  /**
   * onClick 함수를 넣을수 있습니다.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Chip = ({ active, label, onClick, type = "default" }: ChipT) => {
  const actvieClass = `${active === label ? "border-primary-normalBlue bg-primary-background text-grayscale-gray1" : "border-grayscale-gray3 text-grayscale-gray2"}`;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${type === "button" ? "cursor-pointer" : "cursor-auto"} whitespace-nowrap rounded-full border bg-white px-2 py-1 text-base font-semibold leading-6 tracking-tight ${actvieClass}`}
    >
      {label}
    </button>
  );
};

export default Chip;
