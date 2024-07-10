"use client";
import { useRef } from "react";
import Slider from "react-slick";

export default function Sign() {
  const sliderRef = useRef<Slider | null>(null);
  const setting = {
    speed: 600,
    infinite: false,
    draggable: false,
  };

  const nextButtonHandler = () => {
    sliderRef.current?.slickNext();
  };
  const prevButtonHandler = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <main>
      <header className="flex h-14 justify-between">
        <button onClick={prevButtonHandler}>왼</button>
        <button onClick={nextButtonHandler}>오</button>
      </header>

      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...setting}
      >
        <section className="px-4">
          <div className="mt-6 text-center">
            <h4 className="text-2xl font-semibold leading-9 tracking-tight">
              {"userId"}님 반가워요!
            </h4>
            <p className="mt-3 text-base leading-6 tracking-tight">
              어떤 방식으로 꼬순내 커뮤니티에 참여하시겠어요?
            </p>
          </div>
          <div className="mt-9">
            <button className="h-[83px] w-full rounded-[10px] border border-grayscale-gray3 transition-colors hover:border-primary-normalBlue hover:bg-primary-background">
              <dl>
                <dt className="text-xl font-semibold leading-[30px] tracking-tight">
                  댕주
                </dt>
                <dd className="mt-1 text-base font-medium leading-6 tracking-tight">
                  댕댕이 주인
                </dd>
              </dl>
            </button>
            <button className="mt-6 h-[83px] w-full rounded-[10px] border border-grayscale-gray3 transition-colors hover:border-primary-normalBlue hover:bg-primary-background">
              <dl>
                <dt className="text-xl font-semibold leading-[30px] tracking-tight">
                  댕친
                </dt>
                <dd className="mt-1 text-base font-medium leading-6 tracking-tight">
                  댕댕이 친구
                </dd>
              </dl>
            </button>
          </div>
        </section>
        <section className="px-4">
          <h4 className="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight">
            댕주로 가입하기
          </h4>
          <div className="mx-auto mt-4 flex size-[164px] items-center justify-center rounded-full bg-[#D9D9D9] text-grayscale-gray2">
            사진 추가하기
          </div>

          <div className="mt-[41px]">
            <label htmlFor="">닉네임*</label>
            <input
              className="mt-1 block h-10 w-full rounded-[10px] border"
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="">견종</label>
            <select className="mt-1 block h-10 w-full rounded-[10px] border">
              <option value="">견종을 선택해주세요</option>
            </select>
            <div className="mt-3">
              <div className="inline-block border">말티즈</div>
            </div>
          </div>
        </section>
      </Slider>
    </main>
  );
}
