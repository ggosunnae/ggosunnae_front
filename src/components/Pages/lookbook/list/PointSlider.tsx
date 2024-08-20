"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Content {
  id: number;
  imageUrl: string; // 이미지 URL을 추가합니다.
}

function PointSlider() {
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

  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  //react-slick 옵션
  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
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
      {contents.map((content) => (
        <div className="px-2" key={content.id}>
          <div className="relative w-full overflow-hidden after:block after:pb-[calc(216/164*100%)]">
            <Image className="object-cover" fill src={content.imageUrl} alt="강아지" />
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default PointSlider;
