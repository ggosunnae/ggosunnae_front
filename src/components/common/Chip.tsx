"use client";
import { MouseEventHandler } from "react";

interface ChipT {
  type?: "button" | "default";
  active?: string;
  label?: string;
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
