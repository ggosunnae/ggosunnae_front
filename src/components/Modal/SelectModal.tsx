import Top from "@/components/Common/Complete/Top";

const SelectModal = () => {
  return (
    <div className="absolute bottom-0 left-0 z-20 h-full w-full bg-black/20">
      <div className="absolute bottom-0 left-0 min-w-full rounded-t-[40px] bg-white px-4 pb-[21px] pt-3">
        <div className="mx-auto w-[90px] rounded-full border-[2px] border-grayscale-gray3"></div>

        <div className="relative mt-3 flex items-center justify-center">
          <h4 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-medium leading-[30px] tracking-25">
            정렬기준
          </h4>
          <div className="ml-auto">
            <Top>완료</Top>
          </div>
        </div>
        <ul className="mt-3 flex flex-col gap-3">
          <li className="flex h-[42px] w-full cursor-pointer items-center rounded-[10px] border border-primary-normalBlue bg-primary-background px-4 text-left leading-6 tracking-25">
            최신순
          </li>
          <li className="flex h-[42px] w-full cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25">
            오래된순
          </li>
          <li className="flex h-[42px] w-full cursor-pointer items-center rounded-[10px] bg-grayscale-gray4 px-4 text-left leading-6 tracking-25">
            인기순
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectModal;
