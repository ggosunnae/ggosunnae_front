"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string; // 이미지 URL을 추가합니다.
}

export default function CardPopular() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerPadding: "4px",
  };

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

  return (
    <>
      <div className="border-t-none border-gray4 border border-b-[16px] pb-[30px] pl-[16px] pt-[12px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <div
                key={content.id}
                className="relative box-border h-[216px] w-[164px] px-[8px]"
              >
                <Image
                  className="z-3 absolute left-[5px] top-[-24px]"
                  src={"/image/auth/crown.png"}
                  width={48}
                  height={48}
                  alt="왕관"
                />

                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <img
                    src={content.imageUrl}
                    alt={content.text}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-[8px] left-[0] box-border w-full px-[8px] text-white">
                    <h3 className="box-border w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                      {content.text}
                    </h3>
                    <ul className="flex gap-[10px]">
                      <li className="h-[20px] w-[20px] items-center overflow-hidden rounded-full bg-[#CCCCCC] after:flex">
                        <img src="" alt="프로필" />
                      </li>
                      <li>{content.username}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}