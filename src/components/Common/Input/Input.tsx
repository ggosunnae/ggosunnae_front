import { UseFormRegisterReturn } from "react-hook-form";

import Approve from "@/asset/icons/approve.svg";

interface InputT extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  approve?: boolean;
  error?: boolean;
}
const Input = ({ approve, error, register, ...rest }: InputT) => {
  const getBorderColor = () => {
    if (error) return "border-accent-alert";
    if (approve) return "border-accent-approve";
    return "border-grayscale-gray3";
  };

  return (
    <div className="relative">
      <input
        className={`mt-1 block h-10 w-full rounded-[10px] border px-2 outline-none ${getBorderColor()}`}
        {...register}
        {...rest}
      />
      {approve && <Approve className="absolute right-2 top-1/2 -translate-y-1/2" />}
      {error && (
        <p className="ml-2 text-xs font-medium leading-[18px] tracking-tight text-accent-alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
