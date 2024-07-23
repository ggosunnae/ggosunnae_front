"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import { signAction } from "@/actions/signAction";
import Input from "@/components/Common/Input/Input";
import ImageUpload from "@/components/Pages/sign/ImageUpload";
import StepSlider from "@/components/Pages/sign/StepSlider";

export interface IData {
  user_id: string;
  nickName: string;
  profile_url: string;
  userType?: File;
  auth_provider_id: string;
  alerm_id: string;
}

const Sign = () => {
  const { data: session } = useSession();
  const formRef = useRef<HTMLFormElement>(null);

  const [data, setData] = useState({
    user_id: "",
    nickName: "",
    profile_url: "",
    userType: undefined,
    auth_provider_id: "",
    alerm_id: "",
  });

  useEffect(() => {
    if (!session) return;
    setData((prev) => ({
      ...prev,
      user_id: session.user?.id || "",
    }));
  }, [session]);

  return (
    <main className="bg-white">
      <form ref={formRef} action={() => signAction(data)}>
        <StepSlider data={data} formRef={formRef}>
          <section className="px-4">
            <div className="mt-6 text-center">
              <h4 className="text-2xl font-semibold leading-9 tracking-tight">
                {session?.user?.name}님 반가워요!
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
                  data.userType === item.key
                    ? "border-primary-normalBlue bg-primary-background"
                    : "border-grayscale-gray3";
                return (
                  <button
                    type="button"
                    key={item.key}
                    onClick={() => {
                      setData((prev) => ({
                        ...prev,
                        userType: item.key,
                      }));
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
              {data.userType === "daengju" ? "댕주" : "댕친으"}로 가입하기
            </h4>
            <ImageUpload setData={setData} />
            <div className="mt-[41px]">
              <label htmlFor="" className="font-semibold leading-6 tracking-tight">
                닉네임*
              </label>
              <Input approve={true} placeholder="닉네임을 입력해주세요" type="text" />
            </div>
          </section>
        </StepSlider>
      </form>
    </main>
  );
};

export default Sign;
