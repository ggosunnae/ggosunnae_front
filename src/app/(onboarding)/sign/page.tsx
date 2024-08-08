"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import Slider from "react-slick";

import { FormValues, signAction } from "@/actions/signAction";
import LeftArrorw from "@/asset/icons/LeftArrow.svg";
import RightArrorw from "@/asset/icons/rightarrow.svg";
import Input from "@/components/Common/Input/Input";
import ImageUpload from "@/components/Pages/sign/ImageUpload";

const setting = {
  speed: 600,
  infinite: false,
  draggable: false,
  arrows: false,
  touchMove: false,
};

const SignPage = () => {
  const { data: session } = useSession() as any;
  const [step, setStep] = useState(0);
  const router = useRouter();

  const sliderRef = useRef<Slider>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const { watch, setValue, register } = useForm<FormValues>();
  const [pending, formAction] = useFormState(signAction, null);

  const userTypeWatch = watch("userType");
  const nicknameWatch = watch("nickname");

  const HanlderPrev = () => {
    if (step === 0) {
      router.push("/");
    }
    setStep(0);
    sliderRef.current?.slickPrev();
  };

  const HanlderNext = () => {
    if (step === 1) {
      formRef.current?.requestSubmit();
    } else {
      if (!userTypeWatch) {
        return alert("계정 타입을 선택해주세요.");
      }
      setStep(1);
    }
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    if (pending) {
      const { status, message } = pending;

      if (status === "error") {
        alert(message);
      }
    }
  }, [pending]);

  return (
    <main className="bg-white">
      {
        <form ref={formRef} action={formAction}>
          <input type="hidden" {...register("userType")} />
          <header className="flex h-14 justify-between px-4">
            <button type="button">
              <LeftArrorw onClick={HanlderPrev} />
            </button>
            <button type="button">
              <RightArrorw onClick={HanlderNext} />
            </button>
          </header>
          <Slider ref={sliderRef} {...setting}>
            <section className="px-4">
              <div className="mt-6 text-center">
                <h4 className="text-2xl font-semibold leading-9 tracking-tight">
                  {session?.user.name}님 반가워요!
                </h4>
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
                    userTypeWatch === item.key
                      ? "border-primary-normalBlue bg-primary-background"
                      : "border-grayscale-gray3";
                  return (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => {
                        setValue("userType", item.key);
                      }}
                      className={`w-full rounded-[10px] border py-3 text-center transition-colors hover:border-primary-normalBlue hover:bg-primary-background ${active}`}
                    >
                      <Image
                        className="mx-auto"
                        src={
                          item.key === "daengju"
                            ? "/image/auth/daengju.png"
                            : "/image/auth/daengchin.png"
                        }
                        width={60}
                        height={60}
                        alt={`${item.descripton} 아이콘`}
                      />
                      <dl className="mt-1">
                        <dt className="text-xl font-semibold leading-[30px] tracking-tight">
                          {item.name}
                        </dt>
                        <dd className="mt-1 text-[15px] font-medium leading-[22.5px] tracking-tight">
                          {item.descripton}
                        </dd>
                      </dl>
                    </button>
                  );
                })}
              </div>
            </section>
            <section className="px-4">
              <h4 className="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight">
                {userTypeWatch === "daengju" ? "댕주" : "댕친으"}로 가입하기
              </h4>
              <ImageUpload register={register} />
              <div className="mt-[41px]">
                <label htmlFor="" className="font-semibold leading-6 tracking-tight">
                  닉네임*
                </label>
                <Input
                  placeholder="닉네임을 입력해주세요"
                  type="text"
                  register={register("nickname")}
                  setValue={() => setValue("nickname", "")}
                  active={nicknameWatch ? true : false}
                />
              </div>
            </section>
          </Slider>
        </form>
      }
    </main>
  );
};

export default SignPage;
