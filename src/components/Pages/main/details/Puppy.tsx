"use client";
import React, { useState } from "react";
import Comment from "@/components/Common/Comment";
import MoreView from "@/asset/icons/MoreView.svg";
import LikeToggle from "@/components/Common/LikeToggle";
import BookMarkToggle from "@/components/Common/BookMarkToggle";

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
            <img src="" alt="프로필" />
          </li>
          <li className="text-[16px] text-[#111]">꼬순내</li>
          <li className="box-border rounded-[20px] border border-[#2CB1F5] bg-[#B6E8FC] px-[8px] py-[4px] text-[12px] text-[#333333]">
            댕친
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <LikeToggle
            liked={liked}
            onToggle={handleLikeToggle}
            likeOffIcon="black"
          />
          <BookMarkToggle
            bookmarked={bookmarked}
            onToggle={handleBookmarkToggle}
          />
        </div>
        <button>
          <MoreView />
        </button>
      </div>
      <Comment />
    </>
  );
}
