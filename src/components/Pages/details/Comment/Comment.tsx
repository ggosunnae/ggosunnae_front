import Image from "next/image";

import { IComments } from "@/actions/detail/getGgosunnaeDetail";
import MoreViewSVG from "@/asset/icons/MoreView.svg";

interface CommentProps {
  datas: IComments[];
  type?: "lookbook" | "normal";
  buttonTextColor?: "white" | "#6D6D6D";
}

export default function Comment({ datas, type, buttonTextColor = "#6D6D6D" }: CommentProps) {
  return (
    <>
      {datas.map((data) => (
        <div key={data.commentId} className="mt-4 first:mt-0">
          <div className={data.isParent ? "" : "pl-8"}>
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-[8px]">
                <li className="relative flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#97CDF5]">
                  <Image src={data.profileImage} alt="유저 프로필" fill className="object-cover" />
                </li>
                <li
                  className={`text-[14px] font-semibold ${type !== "lookbook" ? "text-grayscale-gray1" : "text-white"}`}
                >
                  {data.userName}
                </li>
              </ul>
              <button type="button">
                <MoreViewSVG
                  className={`${type !== "lookbook" ? "text-[#292C33]" : "text-white"}`}
                />
              </button>
            </div>
            <div className="mt-[5px]">
              <div className="box-border pl-[32px]">
                <p
                  className={`text-[14px] ${type !== "lookbook" ? "text-grayscale-gray1" : "text-white"}`}
                >
                  {data.content}
                </p>
                <button
                  type="button"
                  className={`mt-[4px] text-[14px] ${type !== "lookbook" ? "text-[#6D6D6D]" : "text-white"}`}
                >
                  답글달기
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
