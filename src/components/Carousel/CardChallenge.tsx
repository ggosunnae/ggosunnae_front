"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string;
  liked: boolean; // 좋아요 상태를 추가합니다.
}

export default function CardChallenge() {
  const [contents, setContents] = useState<Content[]>([
    {
      id: 1,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
      liked: false,
    },
    {
      id: 2,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
      liked: false,
    },
    {
      id: 3,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
      liked: false,
    },
    {
      id: 4,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
      liked: false,
    },
    {
      id: 5,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
      liked: false,
    },
  ]);

  const toggleLike = (id: number) => {
    setContents((prevContents) =>
      prevContents.map((content) =>
        content.id === id ? { ...content, liked: !content.liked } : content,
      ),
    );
  };
  //react-slick 옵션
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerPadding: "4px",
  };
  return (
    <>
      <div className="border-t-none border-gray4 border border-b-[8px] pb-[30px] pt-[12px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <Link
                key={content.id}
                href={`/details`} //조정필요
                className="relative w-[164px] px-[8px]"
              >
                <div className="relative h-[240px] w-full overflow-hidden rounded-lg">
                  <img
                    src={content.imageUrl}
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
                <Image
                  className="absolute left-[5px] top-[-24px] z-3"
                  src={"/image/auth/crown.png"}
                  width={48}
                  height={48}
                  alt="왕관"
                />
                <div className="pt-[8px]">
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                    {content.text}
                  </p>
                  <div className="flex justify-between pt-[5px]">
                    <div className="flex items-center">
                      <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
                        <img src="" alt="프로필" />
                      </div>
                      <p className="ml-2 font-medium">{content.username}</p>
                    </div>
                    <button onClick={() => toggleLike(content.id)}>
                      <img
                        src={
                          content.liked
                            ? "image/icons/like_b_on.svg"
                            : "image/icons/like_b_off.svg"
                        }
                        alt="좋아요"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
