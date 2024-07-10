import KakaoLogin from "@/components/Pages/sign/KakaoLogin";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-200">
      <p className="text-xl font-semibold leading-[26px] tracking-tight">
        꼬순내 가득한 댕댕이 일상이 궁금할 땐
      </p>
      <div className="mt-7">
        <Image
          className="mx-auto"
          src={"/image/auth/fullbg.png"}
          width={276}
          height={97}
          alt="강아지 세마리"
        />
        <Image
          className="mt-[7px]"
          src={"/image/auth/logo.png"}
          width={335}
          height={100}
          alt="꼬순내"
        />
      </div>
      <div className="mt-10 w-full px-4 text-center">
        <KakaoLogin />
        <Link
          className="mt-4 inline-block font-medium leading-none text-[#333333]"
          href={"/main"}
        >
          가입없이 둘러보기
        </Link>
      </div>
    </main>
  );
}
