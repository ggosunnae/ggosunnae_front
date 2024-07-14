"use client";
import { useRouter } from "next/navigation";

const KakaoLogin = () => {
  const router = useRouter();
  const onKakaoHandler = () => {
    router.push("/sign");
  };

  return (
    <button
      type="button"
      className="h-11 w-full rounded-full bg-[#FEE500] text-base font-semibold leading-none text-[#191919] shadow-[0_4px_16px_0px_rgb(0,0,0,0.05)]"
      onClick={onKakaoHandler}
    >
      카카오로 시작하기
    </button>
  );
};

export default KakaoLogin;
