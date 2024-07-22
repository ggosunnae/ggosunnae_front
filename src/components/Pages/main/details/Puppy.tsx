"use client";
import React, { useState } from "react";
import Image from "next/image";
import Comment from "@/components/Common/Comment";
import MoreView from "@/asset/icons/MoreView.svg";
import LikeToggle from "@/components/Common/LikeToggle";
import BookMarkToggle from "@/components/Common/BookMarkToggle";
import CardDetails from "@/components/Carousel/CardDetails";

export default function Puppy() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  const handleBookmarkToggle = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <>
      <div className="flex items-center justify-between px-[16px] py-[17px]">
        <ul className="flex items-center gap-[8px]">
          <li className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
            <Image
              src="/path/to/profile.jpg"
              alt="프로필"
              width={24}
              height={24}
            />
          </li>
          <li className="text-[16px] text-[#111]">꼬순내</li>
          <li className="box-border rounded-[20px] border border-[#2CB1F5] bg-[#B6E8FC] px-[8px] py-[4px] text-[12px] text-[#333333]">
            댕친
          </li>
        </ul>
        <button>
          <MoreView />
        </button>
      </div>

      <p className="mb-[10px] px-[16px] text-[20px] font-semibold">
        하찮고 귀여운 댕댕이 좀 봐주세요.
      </p>
      <CardDetails />

      <p className="px-[16px] py-[10px] text-[16px]">
        밤달이는 아침부터 저녁까지 활발하게 뛰어다녀요. 함께하는 모든 순간이
        즐거워요. 복실이는 아침부터 저녁까지 활발하게 뛰어다녀요. 함께하는 모든
        순간이 즐거워요. 복실이는 아침부터 저녁까지 활발하게 뛰어다녀요.
      </p>

      <div className="border-t-none border-gray4 box-border flex h-[55px] w-full items-center justify-between border border-b-[8px] px-[16px]">
        <div className="flex items-center gap-[2px]">
          <LikeToggle
            liked={liked}
            onToggle={handleLikeToggle}
            likeOffIcon="black"
          />
          <span className="text-[16px]">좋아요</span>
        </div>
        <div className="flex items-center gap-[2px]">
          <BookMarkToggle
            bookmarked={bookmarked}
            onToggle={handleBookmarkToggle}
          />
          <span className="text-[16px]">북마크</span>
        </div>
      </div>
      <div className="py-[16px]">
        <Comment />
      </div>
      <div className="mt-[8px] px-[16px]">
        <div className="group flex h-[36px] w-full items-center rounded-full border border-[#cccccc] p-[4px] focus-within:border-[#5DC9F7]">
          <input
            type="text"
            className="flex-grow bg-transparent px-[12px] py-[7px] text-[14px] text-[#333333] outline-none"
            placeholder="댕댕 친구를 위해 댓글을 남겨보세요."
          />
          <button className="rounded-full bg-[#cccccc] px-[10px] py-[4px] text-[12px] text-[#111] transition-colors duration-200 group-focus-within:bg-[#5DC9F7] group-focus-within:text-white">
            등록
          </button>
        </div>
      </div>
    </>
  );
}
