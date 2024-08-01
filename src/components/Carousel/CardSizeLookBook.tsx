"use client";

import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Content {
  id: number;
  imageUrl: string; // 이미지 URL을 추가합니다.
}

export default function CardSizeLookBook() {
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

  //react-slick 옵션
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerPadding: "4px",
    arrows: false,
  };

  return (
    <>
      <div className="pb-[4px] pl-[16px] pt-[12px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <Link
                key={content.id}
                href={`/lookbookdetails`} // 조정 필요
              >
                <div className="relative box-border h-[186px] w-[118px] overflow-hidden">
                  <Image
                    src={content.imageUrl}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="h-[186px] w-[128px] object-cover"
                    width={128}
                    height={186}
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      <div className="pb-[30px] pl-[16px] pt-[4px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <Link
                key={content.id}
                href={`/lookbookdetails`} // 조정 필요
              >
                <div className="relative box-border h-[186px] w-[118px] overflow-hidden">
                  <Image
                    src={content.imageUrl}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="h-[186px] w-[128px] object-cover"
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
