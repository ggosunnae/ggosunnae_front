import { UseFormRegisterReturn } from "react-hook-form";

import Approve from "@/asset/icons/approve.svg";
import Delete from "@/asset/icons/delete.svg";

interface InputT extends React.InputHTMLAttributes<HTMLInputElement> {
  setValue?: any;
  register?: UseFormRegisterReturn;
  active?: boolean;
  approve?: boolean;
  error?: boolean;
}
const Input = ({ active, approve, error, setValue, register, ...rest }: InputT) => {
  const getBorderColor = () => {
    if (active) return "border-primary-normalBlue";
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
      {active && (
        <Delete
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={setValue}
        />
      )}
    </div>
  );
};

export default Input;
