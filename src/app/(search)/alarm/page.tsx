import Link from "next/link";
import LeftArrow from "@/asset/icons/LeftArrow.svg";
import Image from "next/image";

const AlarmPage = () => {
  return (
    <main className="flex flex-col bg-white">
      <div className="sticky top-0 z-10 flex h-14 items-center bg-mono-white px-4">
        <Link href={"/"} className="absolute left-4">
          <LeftArrow />
        </Link>
        <h4 className="tracking-25 mx-auto text-xl font-semibold leading-[30px]">
          알림
        </h4>
      </div>
      <div className="flex-1">
        <div className="px-4">
          <div className="pb-6 pt-4">
            <div
              className="flex h-20 items-center gap-3 rounded-[10px] px-4"
              style={{
                background: `conic-gradient(from 270deg at 18.22% 50%, #5DC9F7 0deg, #B6E8FC 200.73deg, #5DC9F7 360deg)`,
              }}
            >
              <div className="flex size-[60px] items-center justify-center rounded-full bg-white">
                <Image
                  src={"/image/alarm/Megaphone.png"}
                  alt="메가폰"
                  width={36}
                  height={36}
                />
              </div>{" "}
              <p className="tracking-25 text-base font-semibold leading-[22.4px]">
                0월 첫째주 인기댕 구경하기
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="tracking-25 text-base font-medium leading-6 text-grayscale-gray2">
              모두읽음
            </button>
            <button className="tracking-25 text-base font-medium leading-6 text-grayscale-gray2">
              전체 삭제
            </button>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-grayscale-gray3 border-b border-grayscale-gray3">
          {[true, false].map((boolean, index) => (
            <li
              key={index}
              className={`flex gap-2 ${boolean ? "bg-primary-background" : ""} px-4 py-7`}
            >
              <div className="size-12 rounded-[10px] bg-black"></div>
              <p className="tracking-25 text-base font-normal leading-6">
                <span className="font-semibold">꼬순내</span>님이 회원님의
                게시물에 댓글을 남겼어요.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AlarmPage;
