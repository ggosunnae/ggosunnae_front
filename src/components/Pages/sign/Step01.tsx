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
        <h4 className="text-2xl font-semibold leading-9 tracking-tight">
          {"userId"}님 반가워요!
        </h4>
        <p className="mt-3 text-base leading-6 tracking-tight">
          어떤 방식으로 꼬순내 커뮤니티에 참여하시겠어요?
        </p>
      </div>
      <div className="mt-9">
        {[
          {
            key: "dangzoo",
            name: "댕주",
            descripton: "댕댕이 주인",
          },
          {
            key: "dangchin",
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
              className={`h-[83px] w-full rounded-[10px] border transition-colors last:mt-6 hover:border-primary-normalBlue hover:bg-primary-background ${active}`}
            >
              <dl>
                <dt className="text-xl font-semibold leading-[30px] tracking-tight">
                  {item.name}
                </dt>
                <dd className="mt-1 text-base font-medium leading-6 tracking-tight">
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
