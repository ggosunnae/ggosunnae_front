"use client";
import React, { useState } from "react";

export default function PuppyFilter() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
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
      {/* mansory적용해야됨 */}
      <div className="box-border flex justify-between px-[16px]">
        <div className="relative h-auto w-3/6 overflow-hidden rounded-lg">
          <img src="image/test/puppy.jpg" alt="댕댕이" className="relative" />
          {isChecked && (
            <div className="relative h-full w-full">
              <img
                src="image/icons/like_off.svg"
                alt="좋아요"
                className="absolute right-2 top-2"
              />
              <div className="absolute bottom-2 box-border px-2 text-white">
                <p className="w-full overflow-hidden text-ellipsis">
                  하찮고 귀여운 댕댕이 좀 보세요!!
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <div className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
                      <img src="" alt="프로필" className="" />
                    </div>
                    <p className="ml-2">꼬순내</p>
                  </div>
                  <div className="flex h-[16px] w-[19px] items-center justify-center rounded-full bg-black text-sm">
                    3
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
