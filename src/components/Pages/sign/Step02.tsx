import { useRef } from "react";
import UploadIcon from "@/asset/icons/Upload.svg";
import Input from "@/components/Common/Input/Input";

interface StepType {
  type: string;
}

const Step02 = ({ type }: StepType) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickHandler = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  return (
    <section className="px-4">
      <h4 className="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight">
        {type === "daengju" ? "댕주" : "댕친"}로 가입하기
      </h4>
      <div
        onClick={onClickHandler}
        className="mx-auto mt-4 flex size-[164px] cursor-pointer flex-col items-center justify-center rounded-full bg-[#D9D9D9] leading-6 tracking-tight text-grayscale-gray2"
      >
        사진 추가하기
        <UploadIcon className="mt-[5px]" />
        <input ref={fileRef} type="file" className="hidden" />
      </div>

      <div className="mt-[41px]">
        <label htmlFor="" className="font-semibold leading-6 tracking-tight">
          닉네임*
        </label>
        <Input approve={true} />
      </div>
    </section>
  );
};

export default Step02;
