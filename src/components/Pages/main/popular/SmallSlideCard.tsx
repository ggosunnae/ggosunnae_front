"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string;
}
function SmallSlideCard() {
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
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    dots: false,
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
    >
      {contents.map((content) => (
        <div className="px-2" key={content.id}>
          <Link href={`/main/details`} onClick={handleClick} className="relative">
            <div className="relative w-full overflow-hidden rounded-[10px] after:block after:pb-[calc(216/164*100%)]">
              <Image className="object-cover" fill src={content.imageUrl} alt="강아지" />
              <div
                className="z-2 absolute left-0 top-0 h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 70.83%, rgba(0, 0, 0, 0.64) 85.94%, rgba(0, 0, 0, 0.8) 100%),linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 19.57%)",
                }}
              ></div>
            </div>
            <div className="absolute bottom-2 w-full px-2">
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap pb-[2px] text-sm font-semibold leading-5 tracking-tight text-white">
                {content.text}
              </p>
              <div className="flex gap-2">
                <div className="relative size-5 overflow-hidden rounded-full">
                  <Image className="object-cover" fill src={content.imageUrl} alt="강아지" />
                </div>
                <span className="text-sm font-medium leading-5 tracking-tight text-white">
                  {content.username}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
}

export default SmallSlideCard;
