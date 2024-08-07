"use client";

import Image from "next/image";

import MoreView from "@/asset/icons/MoreView.svg";

interface CommentProps {
  textColor?: "white" | "#333";
  buttonTextColor?: "white" | "#6D6D6D";
}

export default function Comment({ textColor = "#333", buttonTextColor = "#6D6D6D" }: CommentProps) {
  return (
    <>
      <div className="px-[16px]">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-[8px]">
            <li className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#97CDF5]">
              <Image src="/path/to/profile.jpg" alt="프로필" width={24} height={24} />
            </li>
            <li className={`text-[14px] font-semibold`} style={{ color: textColor }}>
              사용자ID
            </li>
          </ul>
          <button>
            <MoreView />
          </button>
        </div>
        <div className="mt-[5px]">
          <div className="box-border pl-[32px]">
            <p className="text-[14px]" style={{ color: textColor }}>
              밤달이는 아침부터 저녁까지 활발하게 뛰어다녀요뛰어다녀요뛰어다녀요뛰어다녀요뛰어다녀요
            </p>
            <button className="mt-[4px] text-[14px]" style={{ color: buttonTextColor }}>
              댓글달기
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[16px] px-[16px]">
        <div className="pl-[32px]">
          <ul className="flex items-center gap-[8px]">
            <li className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#97CDF5]">
              <Image src="/path/to/profile.jpg" alt="프로필" width={24} height={24} />
            </li>
            <li className={`text-[14px] font-semibold`} style={{ color: textColor }}>
              사용자ID
            </li>
          </ul>
          <div className="mt-[5px]">
            <div className="box-border pl-[32px]">
              <p className="text-[14px]" style={{ color: textColor }}>
                밤달이는 아침부터 저녁까지 활발하게
                뛰어다녀요뛰어다녀요뛰어다녀요뛰어다녀요뛰어다녀요
              </p>
              <button className="mt-[4px] text-[14px]" style={{ color: buttonTextColor }}>
                댓글달기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[16px] px-[16px]">
        <div className="pl-[32px]">
          <ul className="flex items-center gap-[8px]">
            <li className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#97CDF5]">
              <Image src="/path/to/profile.jpg" alt="프로필" width={24} height={24} />
            </li>
            <li className={`text-[14px] font-semibold`} style={{ color: textColor }}>
              사용자ID
            </li>
          </ul>
          <div className="mt-[5px]">
            <div className="box-border pl-[32px]">
              <p className="text-[14px]" style={{ color: textColor }}>
                밤달이는 아침부터 저녁까지 활발하게
                뛰어다녀요뛰어다녀요뛰어다녀요뛰어다녀요뛰어다녀요
              </p>
              <button className="mt-[4px] text-[14px]" style={{ color: buttonTextColor }}>
                댓글달기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
