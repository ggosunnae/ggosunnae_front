"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ChallengeItem {
  id: number;
  title: string;
  imageUrl: string;
  profileImageUrl: string;
  profileName: string;
  liked: boolean;
}

export default function Challenge() {
  const initialItems: ChallengeItem[] = Array(10)
    .fill(0)
    .map((_, index) => ({
      id: index,
      title: "하찮고 귀여운 댕댕이를 보세요!!!!!",
      imageUrl: "image/test/puppy.jpg",
      profileImageUrl: "",
      profileName: "꼬순내",
      liked: false,
    }));

  const [items, setItems] = useState<ChallengeItem[]>(initialItems);

  const toggleLike = (id: number) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item,
    );
    setItems(newItems);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between gap-y-[26px] px-[16px]">
        {items.map((item) => (
          <Link href={`/details`} key={item.id}>
            <div className="w-[164px]">
              <div className="relative h-[240px] w-full overflow-hidden rounded-lg">
                <img
                  src={item.imageUrl}
                  alt="댕댕이"
                  className="h-full object-cover"
                />
                <div className="absolute bottom-[8px] right-[8px]">
                  <Image
                    src={"/image/auth/play_btn.png"}
                    width={24}
                    height={24}
                    alt="재생"
                  />
                </div>
              </div>
              <div className="pt-[8px]">
                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  {item.title}
                </p>
                <div className="flex justify-between pt-[5px]">
                  <div className="flex items-center">
                    <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
                      <img src={item.profileImageUrl} alt="프로필" />
                    </div>
                    <p className="ml-2 font-medium">{item.profileName}</p>
                  </div>
                  <button onClick={() => toggleLike(item.id)}>
                    <img
                      src={
                        item.liked
                          ? "image/icons/like_b_on.svg"
                          : "image/icons/like_b_off.svg"
                      }
                      alt="좋아요"
                    />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
