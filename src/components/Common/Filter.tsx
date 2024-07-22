"use client";

import DownArrow from "@/asset/icons/downarrow.svg";
import { useModalDispatch } from "@/provider/ModalsProvider";

interface FilterT {
  title?: string;
  children: React.ReactNode;
  active?: string;
  Compoent?: any;
  handler?: any;
}

const Filter = ({ title, children, Compoent, active, handler }: FilterT) => {
  const { open } = useModalDispatch();

  return (
    <button
      type="button"
      className="flex h-6 items-center gap-2 rounded-full border border-black px-2 text-xs font-medium leading-[18px] tracking-25"
      onClick={() => open(Compoent, { title, active, handler })}
    >
      {children} <DownArrow />
    </button>
  );
};

export default Filter;
