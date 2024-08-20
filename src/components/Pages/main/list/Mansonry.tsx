"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import LikeStaus from "@/asset/icons/likeStaus.svg";
import Filter from "@/components/Common/Filter";
import SortModal from "@/components/Modal/Select/SortModal";

interface MansonryProps {
  GSNs: {
    postId: number;
    userName: string;
    imageUrl: string;
    profileImage: string;
    title: string;
    content: string;
  }[];
}

const Mansonry = ({ GSNs }: MansonryProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [activeSort, setActiveSort] = useState("최신순");
  const [activeBreed, setActiveBreed] = useState("견종");

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleOpenSortModal = () => {
    setShowSortModal(true);
  };

  const handleCloseSortModal = () => {
    setShowSortModal(false);
  };

  const handleSelectSort = (sortType: string) => {
    setActiveSort(sortType);
    setShowSortModal(false);
  };

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <div className="mr-1 font-medium">정보 보기</div>
          <label htmlFor="toggle" className="flex cursor-pointer items-center">
            <div className="relative">
              <input
                id="toggle"
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={() => handleToggle(!isChecked)}
              />
              <div
                className={`toggle__line h-[20px] w-[36px] rounded-full ${
                  isChecked ? "bg-[#5DC9F7]" : "bg-[#D9D9D9]"
                }`}
              ></div>
              <div
                className={`toggle__dot absolute left-[2px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 transform rounded-full bg-white ${
                  isChecked ? "translate-x-full transform" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
        <div>
          <div className="flex gap-3">
            <Filter title="견종" active={activeBreed} handler={handleOpenSortModal}>
              {activeBreed}
            </Filter>
            <Filter title="필터" active={activeSort} handler={handleOpenSortModal}>
              {activeSort}
            </Filter>
          </div>
        </div>

        {showSortModal && (
          <SortModal
            isOpen={showSortModal}
            onClose={handleCloseSortModal}
            title="정렬기준"
            active={activeSort}
            handler={handleSelectSort}
          />
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 px-4">
        {GSNs.map((item) => (
          <div
            className="relative w-full overflow-hidden rounded-[10px] after:block after:pb-[calc(240/164*100%)]"
            key={item.postId}
          >
            <Link href={`/main/details`}>
              <Image className="object-cover" fill src={item.imageUrl} alt="강아지" />

              {isChecked && (
                <>
                  <div
                    className="z-2 absolute left-0 top-0 h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(28, 28, 28, 0) 67.08%, rgba(28, 28, 28, 0.64) 83.64%, rgba(28, 28, 28, 0.8) 100%),linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 22.22%)",
                    }}
                  ></div>
                  <div className="absolute right-2 top-2 size-6">
                    <LikeStaus width="24" height="24" />
                  </div>
                  <div className="absolute bottom-2 w-full px-2">
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap pb-[2px] text-sm font-semibold leading-5 tracking-tight text-white">
                      {item.title}
                    </p>
                    <div className="flex w-full justify-between">
                      <div className="flex gap-2">
                        <div className="relative size-5 overflow-hidden rounded-full">
                          <Image className="object-cover" fill src={item.imageUrl} alt="강아지" />
                        </div>
                        <span className="text-sm font-medium leading-5 tracking-tight text-white">
                          {item.userName}
                        </span>
                      </div>
                      <div className="flex h-[16px] w-[19px] items-center justify-center rounded-full bg-black text-[10px] leading-3 text-white">
                        3
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mansonry;
