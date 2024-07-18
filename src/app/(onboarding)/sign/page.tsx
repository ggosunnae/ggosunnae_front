"use client";
import Step01 from "@/components/Pages/sign/Step01";
import Step02 from "@/components/Pages/sign/Step02";
import RightArrorw from "@/asset/icons/rightarrow.svg";
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
    arrows: false,
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
    <main>
      <header className="flex h-14 justify-between px-4">
        <button onClick={prevButtonHandler}>
          <RightArrorw />
        </button>
        <button onClick={nextButtonHandler}>
          <RightArrorw />
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
