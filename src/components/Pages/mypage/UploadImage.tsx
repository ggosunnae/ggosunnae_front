"use client";

import Image from "next/image";

import { ChangeEventHandler, useRef } from "react";

import UploadIcon from "@/asset/icons/Upload.svg";

const UploadImage = ({ profileImage, userName }: { profileImage: string; userName: string }) => {
  const ref = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    if (!ref.current) return;
    ref.current.click();
  };

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
  };

  return (
    <>
      <input ref={ref} type="file" className="hidden" onChange={changeHandler} accept="image/*" />
      <button onClick={clickHandler} type="button" className="relative cursor-pointer">
        <div className="relative size-20 overflow-hidden rounded-full bg-gray-500">
          <Image
            src={profileImage}
            alt={`${userName} 프로필 이미지`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-10 flex size-6 items-center justify-center rounded-full bg-grayscale-gray3">
          <UploadIcon />
        </div>
      </button>
    </>
  );
};

export default UploadImage;
