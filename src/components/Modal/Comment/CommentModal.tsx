"use client";

import Confirm from "@/components/Modal/Confirm/Confirm";
import { useModalDispatch } from "@/provider/ModalsProvider";
import { animated, useTransition } from "@react-spring/web";

interface SelectT {
  isOpen: boolean;
  onClose: any;
}

const CommentModal = ({ isOpen, onClose }: SelectT) => {
  const { open } = useModalDispatch();

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

              <ul className="mt-3 flex max-h-[162px] flex-col gap-3 overflow-y-auto scrollbar-hide">
                <li
                  className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25`}
                  onClick={() => open(Confirm, { type: "delete" })}
                >
                  댓글 삭제하기
                </li>
                <li
                  className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25`}
                  onClick={() => open(Confirm, { type: "edit" })}
                >
                  댓글 수정하기
                </li>
              </ul>
            </animated.div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CommentModal;
