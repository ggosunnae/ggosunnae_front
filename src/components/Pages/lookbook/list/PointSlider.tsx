"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface PointSliderProps {
  data: {
    postId: number;
    imageUrl: string;
  }[];
}

function PointSlider({ data }: PointSliderProps) {
  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  //react-slick 옵션
  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  return (
    <Slider
      ref={(slider) => {
        sliderRef.current = slider;
      }}
      {...settings}
    >
      {data.map((item) => (
        <div className="px-2" key={item.postId}>
          <div className="relative w-full overflow-hidden after:block after:pb-[calc(216/164*100%)]">
            <Image className="object-cover" fill src={item.imageUrl} alt="강아지" />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default PointSlider;
