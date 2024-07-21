"use client";
import { useTransition, animated } from "@react-spring/web";
import Close from "@/asset/icons/X.svg";
const Confirm = ({
  isOpen,
  onClose,
  type,
}: {
  isOpen: boolean;
  onClose: any;
  type: "delete" | "edit";
}) => {
  const transition = useTransition(isOpen, {
    from: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  });

  return (
    <div className={`absolute bottom-0 left-0 z-20 h-full w-full`}>
      {transition((style) => (
        <>
          <animated.div
            style={{ opacity: style.opacity }}
            className={"absolute bottom-0 left-0 right-0 top-0 bg-black/20"}
            onClick={onClose}
          ></animated.div>
          <animated.div
            style={{ scale: style.scale }}
            className={"absolute bottom-0 left-0 right-0 top-0"}
          >
            <div className="absolute left-1/2 top-1/2 w-full max-w-[295px] -translate-x-1/2 -translate-y-1/2 rounded-[20px] bg-white px-[30px] pb-[39px] pt-[38px]">
              <button className="absolute right-4 top-4" onClick={onClose}>
                <Close />
              </button>
              <p className="text-center text-xl font-medium tracking-25">
                {type === "delete"
                  ? "댓글을 삭제하시겠어요?"
                  : "댓글을 수정하시겠어요?"}
              </p>
              <div className="mt-5 flex gap-2">
                <button
                  className="h-10 flex-1 rounded-[10px] bg-grayscale-gray4 font-medium leading-6 tracking-25 text-grayscale-gray1"
                  onClick={onClose}
                >
                  취소
                </button>
                <button
                  className="h-10 flex-1 rounded-[10px] bg-primary-normalBlue font-medium leading-6 tracking-25 text-white"
                  onClick={onClose}
                >
                  {type === "delete" ? "삭제" : "수정"}
                </button>
              </div>
            </div>
          </animated.div>
        </>
      ))}
    </div>
  );
};

export default Confirm;
