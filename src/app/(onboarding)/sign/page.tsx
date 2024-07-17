"use client";
import Step01 from "@/components/Pages/sign/Step01";
import Step02 from "@/components/Pages/sign/Step02";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Slider from "react-slick";

export default function Sign() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const router = useRouter();

  const sliderRef = useRef<Slider | null>(null);
  const setting = {
    speed: 600,
    infinite: false,
    draggable: false,
  };

  const nextButtonHandler = () => {
    if (type === "") {
      return alert("커뮤니티를 선택해주세요.");
    }
    if (step === 1) {
      router.push("/main");
    }
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
    <main className="bg-white">
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
        <Step01 type={type} setType={setType} />
        <Step02 type={type} />
      </Slider>
    </main>
  );
}
