"use client";

import Image from "next/image";

import { useCallback, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import AddPhoto from "@/asset/icons/AddPhoto.svg";
import Deletephoto from "@/asset/icons/Deletephoto.svg";
import Chips from "@/components/Common/Chips";
import Complete from "@/components/Common/Complete/Bottom";
import Select from "@/components/Common/Input/Select";

const Write = () => {
  const { register, handleSubmit } = useForm();
  const { ref, ...rest } = register("description");
  const descrptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [clickChip, setClickChip] = useState("");
  const [check, setCheck] = useState(false);

  const textHeight = useCallback(() => {
    if (!descrptionRef.current) return;

    if (descrptionRef.current.value === "") {
      descrptionRef.current.style.height = "auto"; // 초기 높이로 되돌림
    } else {
      descrptionRef.current.style.height = descrptionRef.current.scrollHeight + "px";
    }
  }, [descrptionRef]);

  const onSubmitHandler = (field: FieldValues) => {
    const { title, descrption } = field;
  };

  return (
    <main className="bg-white">
      {/* <Header /> */}

      <div className="px-4 pt-5">
        <div>
          <p className="text-sm font-medium leading-[21px] tracking-tight text-mono-black">
            주제<span className="text-primary-normalBlue">*</span>
          </p>
          <div className="mt-1 flex gap-3">
            {["애착인형", "😄😠😢😝", "챌린지"].map((text, index) => (
              <Chips
                key={index}
                type="button"
                active={clickChip}
                label={text}
                onClick={() => setClickChip(text)}
              />
            ))}
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor=""
            className="text-sm font-semibold leading-[21px] tracking-tight text-mono-black"
          >
            견종
          </label>
          <Select />
          <div className="mt-3">
            <Chips active={"믹스견"} label={"믹스견"} />
          </div>
        </div>
      </div>

      <div className="mt-5 border-t-4 border-[#efefef] px-4 pb-11 pt-5">
        <p className="text-sm font-semibold leading-[21px] tracking-tight text-mono-black">
          사진 추가
        </p>
        <div className="mt-3 grid grid-cols-2 gap-x-[15px] gap-y-5">
          <>
            <input type="file" accept="image/png,image/jpeg" multiple className="hidden" />
            <button className="size-[164px] rounded-[10px] border text-grayscale-gray3">
              <AddPhoto className="mx-auto" />
              <p className="mt-1 text-base font-medium leading-6 tracking-tight text-grayscale-gray3">
                0/3
              </p>
            </button>
          </>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div className="relative" key={index}>
                <Deletephoto className="absolute right-0 top-0 z-10 -translate-y-1/2 invert" />
                <div className="relative size-[164px] overflow-hidden rounded-[10px]">
                  <Image src={"http://via.placeholder.com/640x480"} alt="" fill />
                </div>
              </div>
            ))}
        </div>

        <form onSubmit={handleSubmit(onSubmitHandler)} className="mt-8">
          <div className="border-b border-grayscale-gray3 pb-2">
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              className="w-full text-base font-semibold leading-6 tracking-tight outline-none"
              {...register("title")}
            />
          </div>
          <textarea
            placeholder="이 사진에 대한 비하인드 스토리를 알고 싶어요! 설명을 추가해보세요"
            onInput={textHeight}
            className="mt-6 min-h-[163px] w-full resize-none rounded-[20px] bg-grayscale-gray4 p-4 text-base font-medium leading-6 tracking-tight text-mono-black outline-none placeholder:text-[#666666]"
            {...register("description")}
            ref={(e) => {
              ref(e);
              descrptionRef.current = e;
            }}
          />
          <div className="mt-[58px]">
            <Complete type="submit" check={check}>
              완료
            </Complete>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Write;
