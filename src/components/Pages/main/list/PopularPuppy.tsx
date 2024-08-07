import Image from "next/image";

import React from "react";

import CardLookBook from "@/components/Carousel/CardLookBook";
import CardPopular from "@/components/Carousel/CardPopular";

export default function PopularPuppy() {
  return (
    <>
      <div className="px-[16px] py-[16px]">
        <Image src="/image/test/banner.png" alt="배너" width={800} height={400} />
      </div>
      <h4 className="px-[16px] pt-[16px] text-[20px] font-semibold">
        실시간
        <span className="text-[#35BBF5]"> 꼬순내 </span>
        인기댕
      </h4>
      <CardPopular />
      <h4 className="px-[16px] pt-[16px] text-[20px] font-semibold">
        실시간
        <span className="text-[#35BBF5]"> 룩북 </span>
        인기댕
      </h4>
      <CardLookBook />
    </>
  );
}
