"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";
import Slider from "react-slick";

import UserIdBig from "@/components/Common/UserIdBig";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string;
}

export default function CardNormal() {
  const contents: Content[] = [
    {
      id: 1,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 2,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 3,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 4,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 5,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
  ];

  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    centerPadding: "10px",
    dots: true,
    //drag할때 link 안넘어가게
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="border-t-none border-gray4 mt-[20px] border border-b-[8px] pb-[10px] pl-[16px]">
        <div className="slider-container">
          <Slider
            ref={(slider) => {
              sliderRef.current = slider;
            }}
            {...settings}
            dots={true}
            arrows={false}
            appendDots={(dots: any[]) => {
              console.log(dots);
              return (
                <>
                  <ul className="flex items-center justify-center gap-2">
                    {dots.map((item, index) => {
                      return (
                        <li key={index} className={`group ${item.props.className}`}>
                          {item.props.children}
                        </li>
                      );
                    })}
                  </ul>
                </>
              );
            }}
            dotsClass=""
            customPaging={() => (
              <button className="h-[6px] w-[6px] rounded-full bg-[#cccccc] group-[.slick-active]:w-[24px] group-[.slick-active]:bg-black"></button>
            )}
          >
            {contents.map((content) => (
              <Link
                key={content.id}
                href={`/main/details`} // 조정 필요
                className="relative h-[360px] w-[343px] px-[8px]"
                onClick={handleClick}
              >
                <div className="relative mx-[8px] h-[360px] w-full overflow-hidden rounded-xl">
                  <div className="absolute h-full w-full bg-black bg-opacity-20"></div>
                  <Image
                    src={content.imageUrl}
                    alt={content.text}
                    objectFit="cover"
                    className="h-full w-full object-cover"
                    width={360}
                    height={360}
                  />
                  <div className="absolute bottom-[16px] right-[0] box-border w-full px-[16px] text-white">
                    <h3 className="box-border w-full overflow-hidden text-ellipsis whitespace-nowrap text-[20px] font-semibold">
                      {content.text}
                    </h3>
                    <UserIdBig username={content.username} />
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
