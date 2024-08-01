import Image from "next/image";

import { IComments } from "@/actions/getGgosunnaeDetail";
import MoreView from "@/components/Pages/main/details/Comment/MoreView";

interface CommentProps {
  datas: IComments[];
  textColor?: "white" | "#333";
  buttonTextColor?: "white" | "#6D6D6D";
}

export default function Comment({
  datas,
  textColor = "#333",
  buttonTextColor = "#6D6D6D",
}: CommentProps) {
  return (
    <>
      {datas.map((data) => (
        <div key={data.commentId} className="mt-[16px] px-[16px] first:mt-0">
          <div className={data.isParent ? "" : "pl-8"}>
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-[8px]">
                <li className="relative flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#97CDF5]">
                  <Image src={data.profileImage} alt="유저 프로필" fill className="object-cover" />
                </li>
                <li className={`text-[14px] font-semibold`} style={{ color: textColor }}>
                  {data.userName}
                </li>
              </ul>
              <MoreView />
            </div>
            <div className="mt-[5px]">
              <div className="box-border pl-[32px]">
                <p className="text-[14px]" style={{ color: textColor }}>
                  {data.content}
                </p>
                <button className="mt-[4px] text-[14px]" style={{ color: buttonTextColor }}>
                  댓글달기
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
