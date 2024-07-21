"use client";
import Top from "@/components/Common/Complete/Top";
import { useModalDispatch, useModalState } from "@/provider/ModalProvider";
import { animated, useTransition } from "@react-spring/web";

const SelectModal = () => {
  const { isOpen, content, title } = useModalState();
  const { closeModal } = useModalDispatch();

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

  // ${active === depth.key ? "border border-primary-normalBlue bg-primary-background" : "bg-grayscale-gray4"}
  return (
    <>
      {transition((style, isOpen) => (
        <>
          {isOpen && (
            <div className={`absolute bottom-0 left-0 z-20 h-full w-full`}>
              <animated.div
                style={{ opacity: style.opacity }}
                className={"absolute bottom-0 left-0 right-0 top-0 bg-black/20"}
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
                      <Top onClick={closeModal}>완료</Top>
                    </div>
                  </div>
                )}

                <ul className="mt-3 flex max-h-[162px] flex-col gap-3 overflow-y-auto scrollbar-hide">
                  {content}
                  {/* {depths.map((depth) => (
                    <li
                      key={depth.key}
                      className={`flex h-[42px] w-full flex-none cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25`}
                    >
                      {depth.name}
                    </li>
                  ))} */}
                </ul>
              </animated.div>
            </div>
          )}
        </>
      ))}
    </>
  );
};

export default SelectModal;
