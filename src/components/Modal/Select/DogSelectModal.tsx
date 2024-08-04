"use client";

import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";

import Top from "@/components/Common/Complete/Top";
import SELECTDOG, { ISelectDog } from "@/constant/selectDog";
import { animated, useTransition } from "@react-spring/web";

interface IDogSelectModal {
  isOpen: boolean;
  onClose: () => void;
  active: ISelectDog[];
  handler: Dispatch<SetStateAction<ISelectDog[]>>;
}

const DogSelectModal = ({ isOpen, onClose, active, handler }: IDogSelectModal) => {
  const [search, setSearch] = useState<ISelectDog[]>([]);

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

  const handlerInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (value === "") return setSearch([]);
    setSearch(
      SELECTDOG.filter((select) => {
        return select.name.startsWith(value);
      }),
    );
  };

  const handlerClick = (item: ISelectDog) => {
    const index = active.findIndex((act) => act.key === item.key);

    console.log(index);

    if (index > -1) {
      handler(active.filter((act) => act.key !== item.key));
    } else {
      handler((prev: any) => [...prev, item]);
    }
  };

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

              <div className="relative mt-3 flex items-center justify-center">
                <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium leading-[30px] tracking-25">
                  견종 선택
                </h4>
                <div className="ml-auto">
                  <Top onClick={onClose}>완료</Top>
                </div>
              </div>

              <div className="mt-6 h-10 overflow-hidden rounded-full border px-12">
                <input
                  className="h-full w-full outline-none"
                  type="text"
                  placeholder="검색어를 입력해 주세요"
                  onChange={handlerInputChange}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {search.map((item) => (
                  <button
                    key={item.key}
                    className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25`}
                    onClick={() => handlerClick(item)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {/* ${active === depth.name ? "border border-primary-normalBlue bg-primary-background" : "bg-grayscale-gray4"} */}
              {/* <ul className="mt-3 flex max-h-[162px] flex-col gap-3 overflow-y-auto scrollbar-hide">
                {SELECTDOG.map((depth) => (
                  <li
                    key={depth.key}
                    className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] px-4 text-left leading-6 tracking-25`}
                    onClick={() => handler((prev: any) => [...prev, depth])}
                  >
                    {depth.name}
                  </li>
                ))}
              </ul> */}
            </animated.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default DogSelectModal;
