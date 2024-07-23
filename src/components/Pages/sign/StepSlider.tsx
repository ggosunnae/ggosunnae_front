"use client";

import { ReactNode, RefObject, useRef, useState } from "react";
import Slider from "react-slick";

import { IData } from "@/app/(onboarding)/sign/page";
import LeftArrorw from "@/asset/icons/LeftArrow.svg";
import RightArrorw from "@/asset/icons/rightarrow.svg";

const setting = {
  speed: 600,
  infinite: false,
  draggable: false,
  arrows: false,
  touchMove: false,
};

const StepSlider = ({
  data,
  formRef,
  children,
}: {
  data: IData;
  formRef: RefObject<HTMLFormElement>;
  children: ReactNode;
}) => {
  const [step, setStep] = useState(0);

  const sliderRef = useRef<Slider | null>(null);

  const nextButtonHandler = () => {
    if (data.userType === "") {
      return alert("커뮤니티를 선택해주세요.");
    }
    if (step === 1) {
      formRef.current?.requestSubmit();
    }
    setStep(1);
    sliderRef.current?.slickNext();
  };
  const prevButtonHandler = () => {
    if (step === 0) {
      //   signOut({ redirectTo: "/" });
    }
    setStep(0);
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      <header className="flex h-14 justify-between px-4">
        <button type="button" onClick={prevButtonHandler}>
          <LeftArrorw />
        </button>
        <button type="button" onClick={nextButtonHandler}>
          <RightArrorw />
        </button>
      </header>
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...setting}
      >
        {children}
      </Slider>
    </>
  );
};

export default StepSlider;
