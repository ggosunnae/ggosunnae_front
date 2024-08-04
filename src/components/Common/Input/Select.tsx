"use client";

import { Dispatch, SetStateAction } from "react";

import RightArrow from "@/asset/icons/rightarrow16.svg";
import DogSelectModal from "@/components/Modal/Select/DogSelectModal";
import { ISelectDog } from "@/constant/selectDog";
import { useModalDispatch } from "@/provider/ModalsProvider";

const Select = ({
  active,
  onSelect,
}: {
  active: ISelectDog[];
  onSelect: Dispatch<SetStateAction<ISelectDog[]>>;
}) => {
  const { open } = useModalDispatch();
  return (
    <button
      type="button"
      onClick={() => open(DogSelectModal, { handler: onSelect, active })}
      className="relative block h-10 w-full rounded-[10px] border border-grayscale-gray3 bg-white px-2 text-left text-base font-normal leading-6 tracking-25 text-grayscale-gray2"
    >
      견종을 선택해주세요
      <RightArrow className="absolute right-2 top-1/2 -translate-y-1/2 stroke-grayscale-gray2" />
    </button>
  );
};

export default Select;
