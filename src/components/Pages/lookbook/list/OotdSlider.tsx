"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface OotdSliderProps {
  data: {
    postId: number;
    imageUrl: string;
  }[];
}

function OotdSlider({ data }: OotdSliderProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  //react-slick 옵션
  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  return (
    <div className="relative">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
        className="-ml-15"
      >
        {data.map((item) => (
          <div className="px-2" key={item.postId}>
            <div className="relative w-full overflow-hidden after:block after:pb-[calc(216/164*100%)]">
              <Image className="object-cover" fill src={item.imageUrl} alt="강아지" />
            </div>
          </div>
        ))}
      </Slider>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-4 bg-black"></div>
    </div>
  );
}

export default OotdSlider;
