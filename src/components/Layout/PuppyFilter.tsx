"use client";
import React, { useState } from "react";

interface PuppyFilterProps {
  onToggle: (checked: boolean) => void;
}

const PuppyFilter: React.FC<PuppyFilterProps> = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <div className="flex justify-between px-[16px] py-[16px] pb-[8px]">
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <div className="mr-[5px] font-medium">정보 보기</div>
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <div
            className={`toggle__line h-[20px] w-[36px] rounded-full ${
              isChecked ? "bg-[#5DC9F7]" : "bg-[#D9D9D9]"
            }`}
          ></div>

          <div
            className={`toggle__dot absolute left-[2px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 transform rounded-full bg-white ${
              isChecked ? "translate-x-full transform" : ""
            }`}
          ></div>
        </div>
      </label>
      <div>필터</div>
    </div>
  );
};

export default PuppyFilter;
