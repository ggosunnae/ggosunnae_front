"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Content {
  id: number;
  imageUrl: string;
}

function SizeSlider() {
  const contents: Content[] = [
    {
      id: 1,
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 2,
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 3,
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 4,
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 5,
      imageUrl: "/image/test/puppy.jpg",
    },
  ];

  // react-slick 옵션
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2, // 한번에 두 슬라이드씩 스크롤
    arrows: false,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <Slider       
      ref={(slider) => {
        sliderRef.current = slider;
      }} 
      {...settings}
    >
      {contents.map((content) => (
        <div className="px-2" key={content.id}>
          <div className="relative w-full overflow-hidden after:block after:pb-[calc(186/128*100%)]">
            <div className="grid grid-cols-2 gap-2">
              <Image
                className="object-cover"
                fill
                src={content.imageUrl}
                alt="강아지"
              />
              <Image
                className="object-cover"
                fill
                src={content.imageUrl}
                alt="강아지"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SizeSlider;
