import { MouseEventHandler } from "react";

const Chip = ({
  active,
  label,
  onClick,
  type = "default",
}: {
  type?: "button" | "default";
  active?: string;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const actvieClass = `${active === label ? "border-primary-normalBlue bg-primary-background text-grayscale-gray1" : "border-grayscale-gray3 text-grayscale-gray2"}`;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${type === "button" ? "cursor-pointer" : "cursor-auto"} rounded-full border px-2 py-1 text-base font-semibold leading-6 tracking-tight ${actvieClass}`}
    >
      {label}
    </button>
  );
};

export default Chip;
