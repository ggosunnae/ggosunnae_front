"use client";

import React from "react";

interface InfoToggleProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

//onToggle => 상태 변경을 처리하는 재사용 가능한 함수

const InfoToggle = ({ isChecked, onToggle }: InfoToggleProps) => {
  //checked 상대 값만 토글하는 함수 toggleSwitch()
  const toggleSwitch = () => {
    onToggle(!isChecked);
  };

  return (
    <label htmlFor="toggle" className="flex cursor-pointer items-center">
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
  );
};

export default InfoToggle;
