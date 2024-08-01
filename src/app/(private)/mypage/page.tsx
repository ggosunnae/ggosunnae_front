import Link from "next/link";

import React from "react";

import List from "@/components/Pages/mypage/List";

const Mypage = () => {
  return (
    <main className="bg-white">
      <header className="flex h-14 items-center justify-center">마이페이지</header>

      <div className="px-4">
        <div className="my-6 rounded-[10px] px-4 py-5 shadow-[0_4px_20px_0_#00000033]">
          <div className="flex gap-4">
            <div className="size-20 flex-none rounded-full bg-gray-500"></div>
            <div className="text-base font-normal leading-[25.6px] tracking-tight">
              <h4>
                내 이름은 <span className="font-semibold">꼬순내</span>
              </h4>
              <h4 className="flex items-center gap-1">
                나는{" "}
                <span className="rounded-full border border-primary-lightBlue bg-primary-darkBlue px-2 py-1 text-xs font-medium tracking-tighter text-grayscale-gray1">
                  댕주
                </span>
              </h4>
            </div>
          </div>
          <Link
            className="mt-4 flex h-7 items-center justify-center rounded-full bg-primary-lightBlue text-sm font-medium leading-[18.2px] tracking-tight"
            href={"/mypage/edit"}
          >
            회원 정보 수정
          </Link>
        </div>
      </div>

      <List />
    </main>
  );
};

export default Mypage;
