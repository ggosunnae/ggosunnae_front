"use client";

import Image from "next/image";

import { ChangeEvent, useRef, useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { FormValues } from "@/actions/signAction";
import UploadIcon from "@/asset/icons/Upload.svg";

const ImageUpload = ({ register }: { register: UseFormRegister<FormValues> }) => {
  const [userImage, setUserImage] = useState("");
  const fileRef = useRef<HTMLInputElement | null>(null);

  // register 함수의 반환값을 구조 분해 할당으로 받습니다.
  const { ref, ...rest } = register("profile_url");

  const onClickHandler = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const onUploadImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file = e.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setUserImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
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
        type="file"
        className="hidden"
        accept="image/*"
        ref={(e) => {
          ref(e);
          fileRef.current = e;
        }}
        {...rest}
        onChange={(e) => {
          rest.onChange(e);
          onUploadImageChange(e);
        }}
      />
    </div>
  );
};

export default ImageUpload;
