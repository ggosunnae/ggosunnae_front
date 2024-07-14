import CardPopular from "@/components/Carousel/CardPopular";
import React from "react";

export default function PopularPuppy() {
  return (
    <>
      <div className="px-[16px] py-[16px]">
        <img src="image/test/banner.png" alt="배너" />
      </div>
      <h4 className="px-[16px] py-[16px] text-xl font-semibold">
        실시간
        <span className="text-[#35BBF5]"> 꼬순내 </span>
        인기댕
      </h4>
      <CardPopular />
      <h4 className="px-[16px] py-[16px] text-xl font-semibold">
        실시간
        <span className="text-[#35BBF5]"> 꼬순내 </span>
        인기댕
      </h4>
      <CardPopular />
    </>
  );
}
