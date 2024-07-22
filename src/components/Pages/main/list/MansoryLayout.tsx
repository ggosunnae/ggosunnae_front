"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UserIdSmall from "@/components/Common/UserIdSmall";
import LikeToggle from "@/components/Common/LikeToggle";

interface MasonryLayoutProps {
  isChecked: any;
}

const MasonryLayout = (props: MasonryLayoutProps) => {
  const { isChecked } = props;
  const [liked, setLiked] = useState<boolean[]>(Array(10).fill(false));

  const toggleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  return (
    <div className="masonry-container px-[16px]">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Link href={`/details`} key={index}>
            <div
              key={index}
              className="masonry-item relative mb-4 overflow-hidden rounded-lg bg-white"
            >
              <Image
                src="/image/test/puppy.jpg"
                alt="댕댕이"
                width={500}
                height={300}
                className="w-full object-cover"
              />
              {isChecked && (
                <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-20 p-2 text-white">
                  <LikeToggle
                    liked={liked[index]}
                    onToggle={() => toggleLike(index)}
                    likeOffIcon="default"
                  />
                  <div>
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      하찮고 귀여운 댕댕이 좀 보세요!!
                    </p>
                    <div className="flex items-center justify-between">
                      <UserIdSmall username="꼬순내" />
                      <div className="flex h-[16px] w-[19px] items-center justify-center rounded-full bg-black text-[10px]">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MasonryLayout;
