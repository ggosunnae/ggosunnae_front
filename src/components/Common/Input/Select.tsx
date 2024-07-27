"use client";

import RightArrow from "@/asset/icons/rightarrow16.svg";

const Select = () => {
  return (
    <button className="relative block h-10 w-full rounded-[10px] border border-grayscale-gray3 bg-white px-2 text-left text-base font-normal leading-6 tracking-25 text-grayscale-gray2">
      견종을 선택해주세요{" "}
      <RightArrow className="absolute right-2 top-1/2 -translate-y-1/2 stroke-grayscale-gray2" />
    </button>
  );
};

export default Select;
