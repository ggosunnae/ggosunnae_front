"use client";
import DownArrow from "@/asset/icons/downarrow.svg";
const Filter = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      onClick={() => {}}
      className="flex h-6 items-center gap-2 rounded-full border border-black px-2 text-xs font-medium leading-[18px] tracking-25"
    >
      {children} <DownArrow />
    </button>
  );
};

export default Filter;
