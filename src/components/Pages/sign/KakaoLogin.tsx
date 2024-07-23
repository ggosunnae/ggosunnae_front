import { signIn } from "@/auth";

const KakaoLogin = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("kakao", { redirectTo: "/sign" });
      }}
    >
      <button
        type="submit"
        className="h-11 w-full rounded-full bg-[#FEE500] text-base font-semibold leading-none text-[#191919] shadow-[0px_4px_16px_0px_#0000001A]"
      >
        카카오로 시작하기
      </button>
    </form>
  );
};

export default KakaoLogin;
