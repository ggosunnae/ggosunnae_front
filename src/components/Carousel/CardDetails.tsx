"use client";

import Image from "next/image";

import { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Next.js Image 컴포넌트 임포트

interface Content {
  id: number;
  imageUrl: string;
}

export default function CardDetails() {
  const contents: Content[] = [
    {
      id: 1,
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 2,
      imageUrl: "/image/test/puppy.jpg", // 앞에 슬래시 추가
    },
    {
      id: 3,
      imageUrl: "/image/test/puppy.jpg", // 앞에 슬래시 추가
    },
    {
      id: 4,
      imageUrl: "/image/test/puppy.jpg", // 앞에 슬래시 추가
    },
    {
      id: 5,
      imageUrl: "/image/test/puppy.jpg", // 앞에 슬래시 추가
    },
  ];

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    centerPadding: "0px",
    dots: true,
  };

  return (
    <>
      <div className="px-[16px] pb-[10px]">
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
              <div key={content.id} className="relative h-[360px] w-full">
                <div className="relative h-[360px] w-full overflow-hidden rounded-xl">
                  <div className="absolute h-full w-full bg-black bg-opacity-20"></div>
                  <Image
                    src={content.imageUrl}
                    alt={`Image ${content.id}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
