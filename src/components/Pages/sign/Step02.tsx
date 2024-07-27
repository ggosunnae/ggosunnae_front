import Image from "next/image";

import { ChangeEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import UploadIcon from "@/asset/icons/Upload.svg";
import Input from "@/components/Common/Input/Input";

interface StepType {
  type: string;
}

const Step02 = ({ type }: StepType) => {
  const [userImage, setUserImage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, watch } = useForm();
  const name = watch("name");

  const onClickHandler = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const onUploadImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setUserImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  const onSubmit = (event: FieldValues) => {
    console.log(event);
  };

  return (
    <section className="px-4">
      <h4 className="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight">
        {type === "daengju" ? "댕주" : "댕친"}로 가입하기
      </h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          onClick={onClickHandler}
          className={`relative mx-auto mt-4 flex size-[164px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full ${!userImage ? "bg-[#D9D9D9]" : "border"} leading-6 tracking-tight text-grayscale-gray2`}
        >
          {!userImage ? (
            <>
              사진 추가하기
              <UploadIcon className="mt-[5px]" />
            </>
          ) : (
            <Image src={userImage} fill alt="유저 이미지" className="object-cover" />
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onUploadImageChange}
          />
        </div>

        <div className="mt-[41px]">
          <label htmlFor="" className="font-semibold leading-6 tracking-tight">
            닉네임*
          </label>
          <Input
            register={register("name")}
            approve={true}
            placeholder="닉네임을 입력해주세요"
            type="text"
          />
        </div>
      </form>
    </section>
  );
};

export default Step02;
