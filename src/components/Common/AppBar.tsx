"use client";

import Link from "next/link";
import Image from "next/image";

interface AppBarProps {
  type: "arrows" | "monthlyPick" | "puppy" | "ggoSunNae" | "lookBook";
  onComplete?: () => void;
}

const AppBar = ({ type, onComplete }: AppBarProps) => {
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
              <Image
                src="/image/auth/LeftArrow.svg"
                alt="LeftArrow"
                width={24}
                height={24}
              />
            </button>
            <button onClick={handleNext}>
              <Image
                src="/image/auth/rightarrow.svg"
                alt="RightArrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        );
      case "monthlyPick":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-white px-[16px]">
            <button onClick={handleBack}>
              <Image
                src="/image/auth/LeftArrow.svg"
                alt="LeftArrow"
                width={24}
                height={24}
                color="black"
              />
            </button>
            <p className="text-[20px] font-semibold">월간 PICK</p>
            <Link href="/">
              <Image
                src="/image/auth/Home.svg"
                alt="home"
                width={24}
                height={24}
              />
            </Link>
          </div>
        );
      case "puppy":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-white px-[16px]">
            <button onClick={handleBack}>
              <Image
                src="/image/auth/LeftArrow.svg"
                alt="left-arrow"
                width={24}
                height={24}
              />
            </button>
            <p className="text-[20px] font-semibold">꼬순내</p>
            <button
              onClick={onComplete}
              className="flex items-center justify-center rounded-full bg-[#efefef] p-2 px-[14px] py-[8px]"
            >
              완료
            </button>
          </div>
        );
      case "ggoSunNae":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-black px-[16px]">
            <button onClick={handleBack}>
              <Image
                src="/image/auth/LeftArrowWht.svg"
                alt="left-arrow"
                width={24}
                height={24}
              />
            </button>
            <Image
              src={"/image/auth/lookbooklogo.png"}
              width={199}
              height={19}
              alt="꼬순내"
            />
            <Link href="">
              <Image
                src="/image/auth/Search.svg"
                alt="search"
                width={24}
                height={24}
              />
            </Link>
          </div>
        );
      case "lookBook":
        return (
          <div className="flex h-[56px] w-full items-center justify-between bg-black px-[16px]">
            <button onClick={handleBack}>
              <Image
                src="/image/auth/LeftArrowWht.svg"
                alt="left-arrow"
                width={24}
                height={24}
              />
            </button>
            <p className="text-[20px] font-semibold text-white">룩북</p>
            <button
              onClick={onComplete}
              className="flex items-center justify-center rounded-full bg-[#efefef] p-2 px-[14px] py-[8px]"
            >
              완료
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderAppBar()}</div>;
};

export default AppBar;
