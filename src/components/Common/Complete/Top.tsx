import { MouseEventHandler } from "react";

const Top = ({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[20px] px-[14px] py-2 text-center text-base font-medium leading-6 tracking-25 ${active ? "bg-primary-normalBlue text-white" : "bg-grayscale-gray4 text-grayscale-gray1"}`}
    >
      {children}
    </button>
  );
};

export default Top;
