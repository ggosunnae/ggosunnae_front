"use client";

import Top from "@/components/Common/Complete/Top";
import { animated, useTransition } from "@react-spring/web";

const DogSelectModal = ({ isOpen, onClose, title, active, handler }: any) => {
  const transition = useTransition(isOpen, {
    from: {
      y: "100%",
      opacity: 0,
    },
    enter: {
      y: "0",
      opacity: 1,
    },
    leave: {
      y: "100%",
      opacity: 0,
    },
  });

  return (
    <div className={`absolute bottom-0 left-0 z-20 h-full w-full`}>
      <div className={`absolute bottom-0 left-0 z-20 h-full w-full`}>
        {transition((style) => (
          <>
            <animated.div
              style={{ opacity: style.opacity }}
              className={"absolute bottom-0 left-0 right-0 top-0 bg-black/20"}
              onClick={onClose}
            ></animated.div>
            <animated.div
              style={{ y: style.y }}
              className="absolute bottom-0 left-0 min-w-full rounded-t-[40px] bg-white px-4 pb-[21px] pt-3"
            >
              <div className="mx-auto w-[90px] rounded-full border-[2px] border-grayscale-gray3"></div>

              {title && (
                <div className="relative mt-3 flex items-center justify-center">
                  <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium leading-[30px] tracking-25">
                    {title}
                  </h4>
                  <div className="ml-auto">
                    <Top onClick={onClose}>완료</Top>
                  </div>
                </div>
              )}

              <ul className="mt-3 flex max-h-[162px] flex-col gap-3 overflow-y-auto scrollbar-hide">
                {[
                  { key: "dog1", name: "닥스훈트" },
                  { key: "dog2", name: "달마시안" },
                  { key: "dog3", name: "리트리버" },
                  { key: "dog4", name: "말티즈" },
                  { key: "dog5", name: "말티푸" },
                  { key: "dog6", name: "말라뮤트" },
                ].map((depth) => (
                  <li
                    key={depth.key}
                    className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] px-4 text-left leading-6 tracking-25 ${active === depth.name ? "border border-primary-normalBlue bg-primary-background" : "bg-grayscale-gray4"} `}
                    onClick={() => handler(depth.name)}
                  >
                    {depth.name}
                  </li>
                ))}
              </ul>
            </animated.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DogSelectModal;
