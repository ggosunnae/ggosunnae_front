"use client";

import Image from "next/image";

import { ChangeEvent, MouseEventHandler, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import UploadIcon from "@/asset/icons/Upload.svg";
import Input from "@/components/Common/Input/Input";

const MypageEditPage = () => {
  const [userImage, setUserImage] = useState("/image/test/puppy.jpg");

  const fileRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit, watch } = useForm();

  const onUploadImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setUserImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  return (
    <main className="bg-white px-4">
      <header className="flex h-14 items-center justify-center">회원 정보 수정</header>

      <form>
        <button
          onClick={clickHandler}
          type="button"
          className={`relative mx-auto mt-14 block size-[164px]`}
        >
          <div
            className={`absolute left-0 top-0 h-full w-full cursor-pointer overflow-hidden rounded-full ${!userImage ? "bg-[#D9D9D9]" : "border"} leading-6 tracking-tight text-grayscale-gray2`}
          >
            <Image src={userImage} fill alt="유저 이미지" className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-1/2 z-10 flex size-9 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-grayscale-gray3">
            <UploadIcon className="h-6 w-6" />
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onUploadImageChange}
          />
        </button>

        <div className="mt-[41px]">
          <label htmlFor="" className="font-semibold leading-6 tracking-tight">
            닉네임
          </label>
          <Input register={register("name")} placeholder="닉네임을 입력해주세요" type="text" />
        </div>

        <div className="mt-[41px]">
          <label htmlFor="" className="font-semibold leading-6 tracking-tight">
            댕주/댕친
          </label>
          <Input register={register("name")} placeholder="닉네임을 입력해주세요" type="text" />
        </div>
      </form>
    </main>
  );
};

export default MypageEditPage;
