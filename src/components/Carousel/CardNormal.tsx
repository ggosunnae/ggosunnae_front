"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Content {
  id: number;
  text: string;
  username: string;
  imageUrl: string; // 이미지 URL을 추가합니다.
}

export default function CardNormal() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    speed: 500,
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
      <div className="border-gray4 mt-[16px] border border-b-[16px] pb-[30px] pl-[16px]">
        <div className="slider-container">
          <Slider {...settings}>
            {contents.map((content) => (
              <div
                key={content.id}
                className="relative mx-[16px] h-[360px] w-full overflow-hidden rounded-xl"
              >
                <img
                  src={content.imageUrl}
                  alt={content.text}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-[16px] right-[16px] box-border w-full px-[16px] text-white">
                  <h3 className="box-border w-full truncate px-[16px] text-xl font-semibold">
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
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
