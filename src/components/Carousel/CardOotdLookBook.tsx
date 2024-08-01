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

export default function CardOotdLookBook() {
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
    centerPadding: "8px",
    arrows: false,
  };

  return (
    <>
      <div className="pb-[30px] pl-[16px] pt-[12px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <Link
                key={content.id}
                href={`/loobookdetails`} //조정필요
              >
                <div className="relative mx-[8px] box-border h-[216px] w-[164px] overflow-hidden">
                  <Image
                    src={content.imageUrl}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="h-[216px] w-[164px] object-cover"
                    width={164}
                    height={216}
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
