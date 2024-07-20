"use client";
import React, { useState } from "react";
import InfoToggle from "@/components/Common/InfoToggle";

interface PuppyFilterProps {
  onToggle: (checked: boolean) => void;
}

const PuppyFilter = (props: PuppyFilterProps) => {
  const { onToggle } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    onToggle(checked);
  };

  return (
    <div className="flex justify-between px-[16px] py-[16px] pb-[8px]">
      <InfoToggle isChecked={isChecked} onToggle={handleToggle} />
      <div>필터</div>
    </div>
  );
};

export default PuppyFilter;
