"use client";

import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

import UserIdSmall from "@/components/Common/UserIdSmall";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string;
}

export default function CardLookBook() {
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
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 3,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 4,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
    {
      id: 5,
      text: "하찮고 귀여운 이 댕댕이를 좀 봐주세요",
      username: "꼬순내",
      imageUrl: "/image/test/puppy.jpg",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerPadding: "4px",
  };

  return (
    <>
      <div className="border-t-none border-gray4 border border-b-[8px] pb-[30px] pt-[12px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <Link
                key={content.id}
                href={`/details`} //조정필요
                className="relative box-border h-[216px] w-[164px] px-[8px] pt-[20px]"
              >
                <Image
                  className="absolute left-[5px] top-[0px] z-3"
                  src={"/image/auth/crown.png"}
                  width={48}
                  height={48}
                  alt="왕관"
                />

                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={content.imageUrl}
                    alt={content.text}
                    layout="fill"
                    objectFit="cover"
                    className="h-full w-full object-cover"
                    width={164}
                    height={216}
                  />
                  <div className="absolute bottom-[8px] left-[0] box-border w-full px-[8px] text-white">
                    <h3 className="box-border w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                      {content.text}
                    </h3>
                    <UserIdSmall username={content.username} />
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
