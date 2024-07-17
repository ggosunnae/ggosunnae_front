"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string; // 이미지 URL을 추가합니다.
}

export default function CardNormal() {
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
      imageUrl: "image/test/puppy.jpg",
    },
    {
      id: 3,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
    },
    {
      id: 4,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
    },
    {
      id: 5,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "image/test/puppy.jpg",
    },
  ];

  const sliderRef = useRef<Slider | null>(null); // Define the sliderRef

  //react-slick 옵션
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    centerPadding: "10px",
    dots: true,
  };

  return (
    <>
      <div className="border-t-none border-gray4 mt-[16px] border border-b-[8px] pb-[10px] pl-[16px]">
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
                        <li
                          key={index}
                          className={`group ${item.props.className}`}
                        >
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
              <Link
                key={content.id}
                href={`/details`} //조정필요
                className="relative h-[360px] w-[343px] px-[8px]"
              >
                <div className="relative mx-[8px] h-[360px] w-full overflow-hidden rounded-xl">
                  <div className="absolute h-full w-full bg-black bg-opacity-20"></div>
                  <img
                    src={content.imageUrl}
                    alt={content.text}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-[16px] right-[0] box-border w-full px-[16px] text-white">
                    <h3 className="box-border w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold">
                      {content.text}
                    </h3>
                    <ul className="flex gap-[10px]">
                      <li className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
                        <img src="" alt="프로필" />
                      </li>
                      <li>{content.username}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
