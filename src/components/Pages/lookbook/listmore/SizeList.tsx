"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

import LikeStaus from "@/asset/icons/likeStaus.svg";
import LikeStausOn from "@/asset/icons/likeStausOn.svg";
import Filter from "@/components/Common/Filter";
import SortModal from "@/components/Modal/Select/SortModal";

interface Content {
  postId: number;
  title: string;
  userName: string;
  imageUrl: string;
  likeNum: number;
}
function SizeList() {
  const contents: Content[] = [
    {
      postId: 1,
      title: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      userName: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
      likeNum: 3,
    },
    {
      postId: 2,
      title: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      userName: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
      likeNum: 3,
    },
    {
      postId: 3,
      title: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      userName: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
      likeNum: 3,
    },
    {
      postId: 4,
      title: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      userName: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
      likeNum: 3,
    },
    {
      postId: 5,
      title: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      userName: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
      likeNum: 3,
    },
  ];
  const [showSortModal, setShowSortModal] = useState(false);
  const [activeBreed, setActiveBreed] = useState("견종");
  const [activeSize, setActiveSize] = useState("사이즈");
  const [activeStyle, setActiveStyle] = useState("스타일");
  const [activeRecommend, setActiveRecommend] = useState("추천순");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const handleOpenSortModal = () => {
    setShowSortModal(true);
  };

  const handleCloseSortModal = () => {
    setShowSortModal(false);
  };

  const handleSelectSort = (sortType: string) => {
    setActiveBreed(sortType);
    setShowSortModal(false);
  };

  //좋아요 토글
  const toggleLike = (postId: number) => {
    setLikedPosts((prevLikedPosts) =>
      prevLikedPosts.includes(postId)
        ? prevLikedPosts.filter((id) => id !== postId)
        : [...prevLikedPosts, postId],
    );
  };
  return (
    <>
      <p className="px-4 py-4 text-xl tracking-tight text-white">사이즈별로 스타일 구경하기</p>
      <div className="px-4">
        <div className="flex justify-end gap-3">
          <Filter title="견종" active={activeBreed} handler={handleOpenSortModal}>
            {activeBreed}
          </Filter>
          <Filter title="사이즈" active={activeSize} handler={handleOpenSortModal}>
            {activeSize}
          </Filter>
          <Filter title="스타일" active={activeStyle} handler={handleOpenSortModal}>
            {activeStyle}
          </Filter>
          <Filter title="추천순" active={activeRecommend} handler={handleOpenSortModal}>
            {activeRecommend}
          </Filter>
        </div>

        {showSortModal && (
          <SortModal
            isOpen={showSortModal}
            onClose={handleCloseSortModal}
            title="정렬기준"
            active={activeBreed}
            handler={handleSelectSort}
          />
        )}
        <div className="mb-[68px] mt-4 grid grid-cols-2 gap-4">
          {contents.map((content) => (
            <div
              className="relative w-full overflow-hidden rounded-[10px] after:block after:pb-[calc(240/164*100%)]"
              key={content.postId}
            >
              <Link href={`/lookbook/details`}>
                <Image className="object-cover" fill src={content.imageUrl} alt="강아지" />

                <div
                  className="z-2 absolute left-0 top-0 h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(28, 28, 28, 0) 67.08%, rgba(28, 28, 28, 0.64) 83.64%, rgba(28, 28, 28, 0.8) 100%),linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 22.22%)",
                  }}
                ></div>
                <div
                  className="absolute right-2 top-2 size-6 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault(); // 링크의 기본 동작을 방지합니다.
                    toggleLike(content.postId);
                  }}
                >
                  {likedPosts.includes(content.postId) ? (
                    <LikeStausOn width="24" height="24" />
                  ) : (
                    <LikeStaus width="24" height="24" />
                  )}
                </div>
                <div className="absolute bottom-2 w-full px-2">
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap pb-[2px] text-sm font-semibold leading-5 tracking-tight text-white">
                    {content.title}
                  </p>
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <div className="relative size-5 overflow-hidden rounded-full">
                        <Image className="object-cover" fill src={content.imageUrl} alt="강아지" />
                      </div>
                      <span className="text-sm font-medium leading-5 tracking-tight text-white">
                        {content.userName}
                      </span>
                    </div>
                    <div className="flex h-[16px] w-[19px] items-center justify-center rounded-full bg-black text-[10px] leading-3 text-white">
                      {content.likeNum}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SizeList;
