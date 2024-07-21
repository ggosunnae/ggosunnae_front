import Approve from "@/asset/icons/approve.svg";
interface InputT {
  approve?: boolean;
  error?: string;
}
const Input = ({ approve, error }: InputT) => {
  const getBorderColor = () => {
    if (error) return "border-accent-alert";
    if (approve) return "border-accent-approve";
    return "border-grayscale-gray3";
  };

  return (
    <div className="relative">
      <input
        className={`mt-1 block h-10 w-full rounded-[10px] border px-2 outline-none ${getBorderColor()}`}
        type="text"
        placeholder="닉네임을 입력해주세요"
      />
      {approve && (
        <Approve className="absolute right-2 top-1/2 -translate-y-1/2" />
      )}
      {error && (
        <p className="ml-2 text-xs font-medium leading-[18px] tracking-tight text-accent-alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
