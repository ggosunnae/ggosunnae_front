import Image from "next/image";

import React from "react";

import MoreViewSVG from "@/asset/icons/MoreView.svg";
import AppBar from "@/components/Common/AppBar";
import BookMark from "@/components/Pages/details/Atoms/BookMark";
import CardDetails from "@/components/Pages/details/Atoms/CardDetails";
import Like from "@/components/Pages/details/Atoms/Like";
import Comment from "@/components/Pages/details/Comment/Comment";
import CommentInput from "@/components/Pages/details/Comment/CommentInput";

const Details = ({
  type,
  title,
  detail,
}: {
  type?: "lookbook" | "normal";
  title: string;
  detail: any;
}) => {
  return (
    <main
      className={`${type === "lookbook" ? "bg-mono-black text-white" : "bg-white text-mono-black"}`}
    >
      <AppBar type="monthlyPick" title={title} />

      <div className="px-4">
        <div className="flex items-center justify-between py-4">
          <ul className="flex items-center gap-[8px]">
            <li className="relative flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
              <Image src={detail.profileImage} alt="유저 프로필" fill className="object-cover" />
            </li>
            <li className="text-[16px]">{detail.userName}</li>
            <li
              className={`box-border rounded-[20px] border px-2 py-1 text-xs text-[#333333] ${detail.userType === "댕주" ? "border-[#B6E8FC] bg-[#2CB1F5]" : "border-[#2CB1F5] bg-[#B6E8FC]"}`}
            >
              {detail.userType}
            </li>
          </ul>
          <button type="button">
            <MoreViewSVG className={`${type !== "lookbook" ? "text-[#292C33]" : "text-white"}`} />
          </button>
        </div>

        <p className="mt-2 text-xl font-semibold leading-[30px]">{detail.title}</p>
      </div>

      <div className="mt-2">
        <CardDetails title={detail.title} data={detail.imageUrls} type={type} />
      </div>

      <div
        className={`border-b-4 ${type === "lookbook" ? "border-mono-white" : "border-grayscale-gray4"} px-4 pb-2`}
      >
        <p className="pt-6 text-base">{detail.content}</p>

        <div className="mt-6 flex w-full items-center justify-between">
          <Like count={detail.likeCount} status />
          <BookMark status />
        </div>
      </div>

      <div className="p-4">
        <Comment datas={detail.comments} type={type} />
      </div>

      <CommentInput />
    </main>
  );
};

export default Details;
