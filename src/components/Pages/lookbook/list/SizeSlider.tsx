"use client";

import Image from "next/image";

import { useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SizeSliderProps {
  data: {
    postId: number;
    imageUrl: string;
  }[];
}

function SizeSlider({ data }: SizeSliderProps) {
  // react-slick 옵션
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
  };

  const sliderRef = useRef<Slider | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // 4개씩 그룹으로 묶기
  const groupedContents = [];
  for (let i = 0; i < data.length; i += 4) {
    groupedContents.push(data.slice(i, i + 4));
  }

  return (
    <Slider
      ref={(slider) => {
        sliderRef.current = slider;
      }}
      {...settings}
    >
      {groupedContents.map((group, index) => (
        <div className="px-2" key={index}>
          <div className="grid grid-cols-2 gap-2">
            {group.map((content) => (
              <div
                key={content.postId}
                className="relative w-full overflow-hidden after:block after:pb-[calc(186/128*100%)]"
              >
                <Image className="object-cover" fill src={content.imageUrl} alt="강아지" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SizeSlider;
