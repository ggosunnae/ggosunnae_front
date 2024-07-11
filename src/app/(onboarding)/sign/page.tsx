"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Slider from "react-slick";

export default function Sign() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const sliderRef = useRef<Slider | null>(null);
  const setting = {
    speed: 600,
    infinite: false,
    draggable: false,
  };

  const nextButtonHandler = () => {
    setStep(1);
    sliderRef.current?.slickNext();
  };
  const prevButtonHandler = () => {
    if (step === 0) {
      return router.push("/");
    }
    setStep(0);
    sliderRef.current?.slickPrev();
  };

  return (
    <main>
      <header className="flex h-14 justify-between px-4">
        <button onClick={prevButtonHandler}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 22L7 12L17 2"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button onClick={nextButtonHandler}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 22L17 12L7 2"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
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
          <div className="mx-auto mt-4 flex size-[164px] flex-col items-center justify-center rounded-full bg-[#D9D9D9] leading-6 tracking-tight text-grayscale-gray2">
            사진 추가하기
            <svg
              className="mt-[5px]"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.47857 5.44382L7.6999 4.21685V9.33279C7.6999 9.47428 7.75609 9.60997 7.85611 9.71001C7.95613 9.81005 8.09179 9.86626 8.23324 9.86626C8.37468 9.86626 8.51034 9.81005 8.61036 9.71001C8.71038 9.60997 8.76657 9.47428 8.76657 9.33279V4.21685L9.9879 5.44382C10.0375 5.49382 10.0965 5.53351 10.1615 5.56059C10.2265 5.58768 10.2962 5.60162 10.3666 5.60162C10.437 5.60162 10.5067 5.58768 10.5717 5.56059C10.6367 5.53351 10.6957 5.49382 10.7452 5.44382C10.7952 5.39423 10.8349 5.33523 10.862 5.27022C10.8891 5.20521 10.903 5.13549 10.903 5.06506C10.903 4.99464 10.8891 4.92491 10.862 4.8599C10.8349 4.7949 10.7952 4.73589 10.7452 4.6863L8.6119 2.55244C8.56118 2.50387 8.50137 2.4658 8.4359 2.44041C8.30606 2.38705 8.16041 2.38705 8.03057 2.44041C7.9651 2.4658 7.90529 2.50387 7.85457 2.55244L5.72124 4.6863C5.67151 4.73604 5.63206 4.79509 5.60515 4.86008C5.57824 4.92507 5.56439 4.99472 5.56439 5.06506C5.56439 5.1354 5.57824 5.20506 5.60515 5.27005C5.63206 5.33503 5.67151 5.39408 5.72124 5.44382C5.77096 5.49356 5.83 5.53302 5.89497 5.55994C5.95994 5.58686 6.02958 5.60071 6.0999 5.60071C6.17023 5.60071 6.23986 5.58686 6.30484 5.55994C6.36981 5.53302 6.42884 5.49356 6.47857 5.44382ZM13.0332 7.73239C12.8918 7.73239 12.7561 7.7886 12.6561 7.88864C12.5561 7.98869 12.4999 8.12438 12.4999 8.26586V11.4667C12.4999 11.6081 12.4437 11.7438 12.3437 11.8439C12.2437 11.9439 12.108 12.0001 11.9666 12.0001H4.4999C4.35845 12.0001 4.2228 11.9439 4.12278 11.8439C4.02276 11.7438 3.96657 11.6081 3.96657 11.4667V8.26586C3.96657 8.12438 3.91038 7.98869 3.81036 7.88864C3.71034 7.7886 3.57468 7.73239 3.43324 7.73239C3.29179 7.73239 3.15613 7.7886 3.05611 7.88864C2.95609 7.98869 2.8999 8.12438 2.8999 8.26586V11.4667C2.8999 11.8911 3.06847 12.2982 3.36853 12.5983C3.66859 12.8984 4.07556 13.0671 4.4999 13.0671H11.9666C12.3909 13.0671 12.7979 12.8984 13.0979 12.5983C13.398 12.2982 13.5666 11.8911 13.5666 11.4667V8.26586C13.5666 8.12438 13.5104 7.98869 13.4104 7.88864C13.3103 7.7886 13.1747 7.73239 13.0332 7.73239Z"
                fill="#666666"
              />
            </svg>
          </div>

          <div className="mt-[41px]">
            <label
              htmlFor=""
              className="font-semibold leading-6 tracking-tight"
            >
              닉네임*
            </label>
            <div className="relative">
              <input
                className="mt-1 block h-10 w-full rounded-[10px] border px-2"
                type="text"
                placeholder="닉네임을 입력해주세요"
              />
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.42857L5.53203 11.9137C5.56849 11.96 5.63688 11.9649 5.67956 11.9242L14 4"
                  stroke="#67A22C"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor=""
              className="font-semibold leading-6 tracking-tight"
            >
              견종
            </label>
            <select className="mt-1 block h-10 w-full rounded-[10px] border px-2">
              <option value="">견종을 선택해주세요</option>
            </select>
            <div className="mt-3">
              <div className="tracking-tights relative inline-block cursor-pointer rounded-full border border-primary-normalBlue bg-primary-background py-1 pl-2 pr-8 text-sm font-medium leading-5">
                말티즈
                <svg
                  className="absolute right-2 top-1/2 w-4 -translate-y-1/2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.7166 2.28345C22.0945 2.66137 22.0945 3.27411 21.7166 3.65204L3.65204 21.7166C3.27411 22.0945 2.66137 22.0945 2.28345 21.7166C1.90552 21.3386 1.90552 20.7259 2.28345 20.348L20.348 2.28345C20.7259 1.90552 21.3386 1.90552 21.7166 2.28345Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.28345 2.28345C2.66137 1.90552 3.27411 1.90552 3.65204 2.28345L21.7166 20.348C22.0945 20.7259 22.0945 21.3386 21.7166 21.7166C21.3386 22.0945 20.7259 22.0945 20.348 21.7166L2.28345 3.65204C1.90552 3.27411 1.90552 2.66137 2.28345 2.28345Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </main>
  );
}
