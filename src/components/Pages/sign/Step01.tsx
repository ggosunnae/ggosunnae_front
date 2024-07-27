import Image from "next/image";

import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

interface StepType {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

const Step01 = ({ type, setType }: StepType) => {
  const onClickHandler = (key: string) => {
    setType(key);
  };

  return (
    <section className="px-4">
      <div className="mt-6 text-center">
        <h4 className="text-2xl font-semibold leading-9 tracking-tight">{"userId"}님 반가워요!</h4>
        <p className="mt-3 text-base leading-6 tracking-tight">
          어떤 방식으로 꼬순내 커뮤니티에 참여하시겠어요?
        </p>
      </div>
      <div className="mt-[74px] flex gap-[15px]">
        {[
          {
            key: "daengju",
            name: "댕주",
            descripton: "댕댕이 주인",
          },
          {
            key: "daengchin",
            name: "댕친",
            descripton: "댕댕이 친구",
          },
        ].map((item) => {
          const active =
            type === item.key
              ? "border-primary-normalBlue bg-primary-background"
              : "border-grayscale-gray3";
          return (
            <button
              key={item.key}
              onClick={() => onClickHandler(item.key)}
              className={`w-full rounded-[10px] border py-3 text-center transition-colors hover:border-primary-normalBlue hover:bg-primary-background ${active}`}
            >
              <Image
                className="mx-auto"
                src={
                  item.key === "daengju" ? "/image/auth/daengju.png" : "/image/auth/daengchin.png"
                }
                width={60}
                height={60}
                alt={`${item.descripton} 아이콘`}
              />
              <dl className="mt-1">
                <dt className="text-xl font-semibold leading-[30px] tracking-tight">{item.name}</dt>
                <dd className="mt-1 text-[15px] font-medium leading-[22.5px] tracking-tight">
                  {item.descripton}
                </dd>
              </dl>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Step01;
