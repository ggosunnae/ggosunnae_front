"use client";

import Image from "next/image";

import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import UploadIcon from "@/asset/icons/Upload.svg";
import Input from "@/components/Common/Input/Input";

const MypageEditPage = () => {
  const [userImage, setUserImage] = useState("");

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

  return (
    <main className="bg-white px-4">
      <header className="flex h-14 items-center justify-center">회원 정보 수정</header>

      <form>
        <div
          className={`relative mx-auto mt-14 flex size-[164px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full ${!userImage ? "bg-[#D9D9D9]" : "border"} leading-6 tracking-tight text-grayscale-gray2`}
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
