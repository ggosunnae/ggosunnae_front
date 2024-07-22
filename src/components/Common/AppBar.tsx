"use client";

import Image from "next/image";
import Link from "next/link";

import Home from "@/asset/icons/Home.svg";
import LeftArrow from "@/asset/icons/LeftArrow.svg";
import LeftArrowWht from "@/asset/icons/LeftArrowWht.svg";
import Search from "@/asset/icons/Search.svg";
import RightArrow from "@/asset/icons/rightarrow.svg";

interface AppBarProps {
  type: "arrows" | "monthlyPick" | "puppy" | "ggoSunNae" | "lookBook";
  title?: string;
  showCompleteButton?: boolean;
  onComplete?: () => void;
}

const AppBar = ({ type, title, showCompleteButton, onComplete }: AppBarProps) => {
  const handleBack = () => {
    return;
  };

  const handleNext = () => {
    return;
  };

  const renderAppBar = () => {
    switch (type) {
      case "arrows":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-white px-[16px]">
            <button onClick={handleBack}>
              <LeftArrow />
            </button>
            <button onClick={handleNext}>
              <RightArrow />
            </button>
          </div>
        );
      case "monthlyPick":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-white px-[16px]">
            <button onClick={handleBack}>
              <LeftArrow />
            </button>
            <p className="text-[20px] font-semibold">{title || "월간 PICK"}</p>
            {showCompleteButton ? (
              <Link href="/">
                <Home />
              </Link>
            ) : (
              <div className="h-[24px] w-[24px]"></div>
            )}
          </div>
        );
      case "puppy":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-white px-[16px]">
            <button onClick={handleBack}>
              <LeftArrow />
            </button>
            <p className="text-[20px] font-semibold">꼬순내</p>
            {showCompleteButton ? (
              <button
                onClick={onComplete}
                className="flex items-center justify-center rounded-full bg-[#efefef] p-2 px-[14px] py-[8px]"
              >
                완료
              </button>
            ) : (
              <div className="h-[24px] w-[24px]"></div>
            )}
          </div>
        );
      case "ggoSunNae":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-black px-[16px]">
            <button onClick={handleBack}>
              <LeftArrow />
            </button>
            <Image src={"/image/auth/lookbooklogo.png"} width={199} height={19} alt="꼬순내" />
            <Link href="">
              <Search />
            </Link>
          </div>
        );
      case "lookBook":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-black px-[16px]">
            <button onClick={handleBack}>
              <LeftArrowWht />
            </button>
            <p className="text-[20px] font-semibold text-white">룩북</p>
            {showCompleteButton ? (
              <button
                onClick={onComplete}
                className="flex items-center justify-center rounded-full bg-[#efefef] p-2 px-[14px] py-[8px]"
              >
                완료
              </button>
            ) : (
              <div className="h-[24px] w-[24px]"></div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderAppBar()}</div>;
};

export default AppBar;
