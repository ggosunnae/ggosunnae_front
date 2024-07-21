"use client";
import React, { useState } from "react";
import Comment from "@/components/Common/Comment";
import MoreView from "@/asset/icons/MoreView.svg";
import LikeToggle from "@/components/Common/LikeToggle";
import BookMarkToggle from "@/components/Common/BookMarkToggle";
import CardDetails from "@/components/Carousel/CardDetails";

export default function PopularPuppy() {
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
            <img src="" alt="프로필" />
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

      <p className="mt-[8px] text-[20px] font-semibold">
        하찮고 귀여운 댕댕이 좀 봐주세요.
      </p>
      <CardDetails />

      <p className="py-[10px] text-[16px]">
        밤달이는 아침부터 저녁까지 활발하게 뛰어다녀요. 함께하는 모든 순간이
        즐거워요. 복실이는 아침부터 저녁까지 활발하게 뛰어다녀요. 함께하는 모든
        순간이 즐거워요. 복실이는 아침부터 저녁까지 활발하게 뛰어다녀요.{" "}
      </p>

      <div className="border-t-none border-gray4 box-border flex w-full items-center justify-between border border-b-[8px] px-[16px]">
        <div className="flex items-center gap-[2px]">
          <LikeToggle
            liked={liked}
            onToggle={handleLikeToggle}
            likeOffIcon="black"
          />
        </div>
        <div className="flex items-center gap-[2px]">
          <BookMarkToggle
            bookmarked={bookmarked}
            onToggle={handleBookmarkToggle}
          />
        </div>
      </div>
      <Comment />
    </>
  );
}
