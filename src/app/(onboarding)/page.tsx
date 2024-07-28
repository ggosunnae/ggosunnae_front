import Image from "next/image";
import Link from "next/link";

import KakaoLogin from "@/components/Pages/sign/KakaoLogin";

export default function OnBoardingPage() {
  return (
    <main className="flex h-full flex-col justify-between bg-slate-200 bg-[url(/image/auth/background.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="pt-28">
        <p className="text-center text-xl font-semibold leading-[26px] tracking-tight text-white">
          꼬순내 가득한 <br />
          댕댕이 일상이 궁금할 땐
        </p>
        <div className="mt-3">
          <Image
            className="mx-auto"
            src={"/image/auth/logo.png"}
            width={375}
            height={140}
            alt="꼬순내"
          />
        </div>
      </div>

      <div className="mt-[53px] w-full px-4 pb-[76px] text-center">
        <KakaoLogin />
        <Link className="mt-4 inline-block font-medium leading-none text-[#333333]" href={"/list"}>
          가입없이 둘러보기
        </Link>
      </div>
    </main>
  );
}
