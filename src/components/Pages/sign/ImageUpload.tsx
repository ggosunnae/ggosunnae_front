"use client";

import Image from "next/image";

import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";

import { IData } from "@/app/(onboarding)/sign/page";
import UploadIcon from "@/asset/icons/Upload.svg";

const ImageUpload = ({ setData }: { setData: Dispatch<SetStateAction<IData>> }) => {
  const [userImage, setUserImage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

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

    setData((prev) => ({
      ...prev,
      profile_url: file,
    }));
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
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onUploadImageChange}
      />
    </div>
  );
};

export default ImageUpload;
