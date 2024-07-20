"use client";
import Link from "next/link";
import HomeIcon from "@/asset/icons/Home.svg";
import LookbookIcon from "@/asset/icons/Lookbook.svg";
import BNBAdd from "@/asset/icons/BNBAdd.svg";
import Ggosunnae from "@/asset/icons/ggosunnae.svg";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const BNB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ggosunnaeProps = useSpring({
    x: isOpen ? "-150%" : "-50%",
    y: isOpen ? "-150%" : "-50%",
    opacity: isOpen ? 1 : 0,
  });

  const lookbookProps = useSpring({
    x: isOpen ? "50%" : "-50%",
    y: isOpen ? "-150%" : "-50%",
    opacity: isOpen ? 1 : 0,
  });

  return (
    <div className="absolute bottom-0 left-0 w-full rounded-t-[20px] bg-white shadow-[5px_1px_6px_0px_#D9D9D9]">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <Link href="/" passHref>
          <animated.a
            style={ggosunnaeProps}
            className="absolute left-1/2 top-1/2 flex size-[60px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-grayscale-gray4 text-center transition-colors hover:bg-primary-normalBlue"
          >
            <Ggosunnae />
            <p className="mt-[2px] text-xs font-semibold leading-[18px] tracking-25">
              꼬순내
            </p>
          </animated.a>
        </Link>
        <Link href="/">
          <animated.a
            style={lookbookProps}
            className="absolute left-1/2 top-1/2 flex size-[60px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-grayscale-gray4 text-center transition-colors hover:bg-primary-normalBlue"
          >
            <LookbookIcon />
            <p className="mt-[2px] text-xs font-semibold leading-[18px] tracking-25">
              룩북
            </p>
          </animated.a>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 flex size-10 items-center justify-center rounded-full bg-primary-normalBlue"
        >
          <BNBAdd />
        </button>
      </div>
      <nav className="flex">
        <Link href={"/"} className="flex-1 pb-[31px] pt-[7px] text-center">
          <HomeIcon className="mx-auto" />
          <p className="text-xs font-medium leading-[18px] tracking-25">홈</p>
        </Link>
        <Link href={"/"} className="flex-1 pb-[31px] pt-[7px] text-center">
          <LookbookIcon className="mx-auto" />
          <p className="text-xs font-medium leading-[18px] tracking-25">룩북</p>
        </Link>
      </nav>
    </div>
  );
};

export default BNB;
