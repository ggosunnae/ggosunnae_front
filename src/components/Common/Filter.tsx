"use client";
import DownArrow from "@/asset/icons/downarrow.svg";
import { useModalDispatch } from "@/provider/ModalProvider";

interface FilterT {
  title?: string;
  children: React.ReactNode;
  Content?: React.ComponentType<any>;
}

const Filter = ({ title, children, Content }: FilterT) => {
  const { openModal } = useModalDispatch();

  return (
    <button
      type="button"
      className="flex h-6 items-center gap-2 rounded-full border border-black px-2 text-xs font-medium leading-[18px] tracking-25"
      onClick={() => {
        openModal(Content ? <Content /> : null, title);
      }}
    >
      {children} <DownArrow />
    </button>
  );
};

export default Filter;
