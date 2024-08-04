"use client";

import Image from "next/image";

import { useRef } from "react";
import Slider from "react-slick";

interface CardDetailsProps {
  title: string;
  data: string[];
  dotActiveColor: string; // bg-black 또는 bg-white를 받아올 prop
}

export default function CardDetails({ title, data, dotActiveColor }: CardDetailsProps) {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    centerPadding: "0px",
    dots: true,
    dotsClass: "",
    arrows: false,
  };

  return (
    <Slider
      ref={(slider) => {
        sliderRef.current = slider;
      }}
      appendDots={(dots: any[]) => {
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
      customPaging={() => (
        <button
          className={`h-[6px] w-[6px] rounded-full bg-[#cccccc] transition-all group-[.slick-active]:w-[24px] group-[.slick-active]:${dotActiveColor}`}
        ></button>
      )}
      {...settings}
    >
      {data.map((content) => (
        <div key={content} className="px-4">
          <div className="relative h-[375px] w-full overflow-hidden rounded-xl align-top">
            <Image src={content} alt={`${title} ${content}`} fill className="object-cover" />
          </div>
        </div>
      ))}
    </Slider>
  );
}
