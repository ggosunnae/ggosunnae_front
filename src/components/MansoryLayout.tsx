import React, { useState } from "react";
import Link from "next/link";

interface MasonryLayoutProps {
  isChecked: any;
}
const MasonryLayout: React.FC<MasonryLayoutProps> = ({ isChecked }) => {
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
              className="masonry-item relative mb-4 overflow-hidden rounded-lg bg-white shadow-md"
            >
              <img
                src="image/test/puppy.jpg"
                alt="댕댕이"
                className="w-full object-cover"
              />
              {isChecked && (
                <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-20 p-2 text-white">
                  <div className="flex cursor-pointer justify-end">
                    <a onClick={() => toggleLike(index)}>
                      <img
                        src={
                          liked[index]
                            ? "image/icons/like_on.svg"
                            : "image/icons/like_off.svg"
                        }
                        alt="좋아요"
                      />
                    </a>
                  </div>
                  <div>
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      하찮고 귀여운 댕댕이 좀 보세요!!
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
                          <img src="" alt="프로필" />
                        </div>
                        <p className="ml-2">꼬순내</p>
                      </div>
                      <div className="flex h-[16px] w-[19px] items-center justify-center rounded-full bg-black text-sm">
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