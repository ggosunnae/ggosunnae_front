"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SlideCardProps {
  TopGSNs: {
    postId: number;
    userName: string;
    imageUrl: string;
    profileImage: string;
    title: string;
    content: string;
  }[];
}

function SlideCard({ TopGSNs }: SlideCardProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
    centerPadding: "10px",
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
                  <li key={index} className={`group flex h-4 items-center ${item.props.className}`}>
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
        <button className="h-[6px] w-[6px] rounded-full bg-[#cccccc] group-[.slick-active]:w-6 group-[.slick-active]:bg-black"></button>
      )}
    >
      {TopGSNs.map((item: any) => (
        <div className="px-2">
          <Link key={item.postId} href={`/main/details`} onClick={handleClick} className="relative">
            <div className="relative w-full overflow-hidden rounded-2xl after:block after:pb-[calc(360/343*100%)]">
              <Image className="object-cover" fill src={item.imageUrl} alt="강아지" />
              <div
                className="z-2 absolute left-0 top-0 h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(28, 28, 28, 0) 50%, rgba(28, 28, 28, 0.64) 75.14%, rgba(28, 28, 28, 0.8) 100%)",
                }}
              ></div>
            </div>

            <div className="absolute bottom-4 w-full pl-4">
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold leading-[30px] tracking-tight text-white">
                {item.title}
              </p>
              <div className="flex gap-2">
                <div className="relative size-6 overflow-hidden rounded-full">
                  <Image className="object-cover" fill src={item.profileImage} alt="강아지" />
                </div>
                <span className="text-base font-medium leading-6 tracking-tight text-white">
                  {item.userName}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default SlideCard;
