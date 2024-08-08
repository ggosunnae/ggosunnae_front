"use client";

import React, { useState } from "react";

import InfoToggle from "@/components/Common/InfoToggle";

interface PuppyFilterProps {
  onInfoToggle: (checked: boolean) => void;
}

const PuppyFilter = (props: PuppyFilterProps) => {
  const { onInfoToggle } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    onInfoToggle(checked);
  };

  return (
    <div className="flex justify-between px-[16px] py-[16px] pb-[8px]">
      <div className="flex items-center">
        <div className="mr-[5px] font-medium">정보 보기</div>
        <InfoToggle isChecked={isChecked} onToggle={handleToggle} />
      </div>
      <div>필터</div>
    </div>
  );
};

export default PuppyFilter;
