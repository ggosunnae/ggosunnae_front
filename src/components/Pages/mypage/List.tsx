"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const List = () => {
  const [isOpen, setIsOpen] = useState({
    bookmark: true,
    post: false,
    setting: false,
  });

  return (
    <>
      <div className="relative flex gap-6 border-b px-4 tracking-tight">
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => ({
              ...prev,
              bookmark: true,
              post: false,
              setting: false,
            }));
          }}
          className={`cursor-pointer pb-3 ${isOpen.bookmark ? "font-semibold text-[#000]" : "text-[#777]"}`}
        >
          북마크
        </button>
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => ({
              ...prev,
              bookmark: false,
              post: true,
              setting: false,
            }));
          }}
          className={`cursor-pointer pb-3 ${isOpen.post ? "font-semibold text-[#000]" : "text-[#777]"}`}
        >
          내가 작성한 글
        </button>
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => ({
              ...prev,
              bookmark: false,
              post: false,
              setting: true,
            }));
          }}
          className={`cursor-pointer pb-3 ${isOpen.setting ? "font-semibold text-[#000]" : "text-[#777]"}`}
        >
          설정
        </button>
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-black"></div>
      </div>

      {isOpen.bookmark && (
        <div className="grid grid-cols-2 gap-[15px] p-4">
          <Link
            href={"/"}
            className="relative w-full overflow-hidden rounded-[10px] after:block after:pb-[calc(240/164*100%)]"
          >
            <Image src="/image/test/puppy.jpg" alt="테스트 이미지" fill />
          </Link>
          <Link
            href={"/"}
            className="relative w-full overflow-hidden rounded-[10px] after:block after:pb-[calc(240/164*100%)]"
          >
            <Image src="/image/test/puppy.jpg" alt="테스트 이미지" fill />
          </Link>
        </div>
      )}

      {isOpen.post && (
        <div className="flex flex-col gap-4 p-4">
          <Link href={"/"}>
            <div className="flex gap-2 tracking-tight">
              <div className="size-[100px] flex-none rounded-[10px] bg-gray-500" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="rounded-full border border-primary-darkBlue px-2 py-1 text-xs font-medium leading-[18px] text-[#666]">
                    룩북
                  </div>
                  <div>북마크 99+</div>
                </div>
                <h4 className="mt-[10px] font-medium leading-6 text-grayscale-gray1">
                  하찮고 귀여운 댕댕이 좀 봐주세요
                </h4>
                <p className="mt-1 line-clamp-2 text-ellipsis text-sm font-normal leading-[18.2px] text-grayscale-gray1">
                  댕댕이는 아침부터 저녁까지 활발하게 뛰어다녀요... 댕댕이는 아침부터 저녁까지
                  활발...
                </p>
              </div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className="flex gap-2 tracking-tight">
              <div className="size-[100px] flex-none rounded-[10px] bg-gray-500" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div className="rounded-full border border-primary-darkBlue px-2 py-1 text-xs font-medium leading-[18px] text-[#666]">
                    룩북
                  </div>
                  <div>북마크 99+</div>
                </div>
                <h4 className="mt-[10px] font-medium leading-6 text-grayscale-gray1">
                  하찮고 귀여운 댕댕이 좀 봐주세요
                </h4>
                <p className="mt-1 line-clamp-2 text-ellipsis text-sm font-normal leading-[18.2px] text-grayscale-gray1">
                  댕댕이는 아침부터 저녁까지 활발하게 뛰어다녀요... 댕댕이는 아침부터 저녁까지
                  활발...
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}

      {isOpen.setting && (
        <div className="px-4 py-6 tracking-tight">
          <div className="flex justify-between">
            <p className="text-base font-medium leading-6">댓글 알림</p>
            <button>버튼</button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="text-base font-medium leading-6">마게팅 동의</p>
              <button>버튼</button>
            </div>
            <p className="mt-2 text-sm font-medium leading-5 text-grayscale-gray2">
              휴대폰 본인 인증 후 실시간 인기댕 및 서비스 내 새로운 기능/업데 이트 소식 받기
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
