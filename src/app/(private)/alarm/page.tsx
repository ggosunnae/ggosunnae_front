import Image from "next/image";
import Link from "next/link";

import allDeleteAlarm from "@/actions/alarm/allDeleteAlarm";
import allReadAlarm from "@/actions/alarm/allReadAlarm";
import getAlarm from "@/actions/alarm/getAlarm";
import LeftArrow from "@/asset/icons/LeftArrow.svg";

const AlarmPage = async () => {
  const { data: alarms } = await getAlarm();

  return (
    <main className="flex flex-col bg-white">
      <div className="sticky top-0 z-10 flex h-14 items-center bg-mono-white px-4">
        <Link href={"/"} className="absolute left-4">
          <LeftArrow />
        </Link>
        <h4 className="mx-auto text-xl font-semibold leading-[30px] tracking-25">알림</h4>
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
                <Image src={"/image/alarm/Megaphone.png"} alt="메가폰" width={36} height={36} />
              </div>
              <p className="text-base font-semibold leading-[22.4px] tracking-25">
                0월 첫째주 인기댕 구경하기
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <form action={allReadAlarm}>
              <button
                type="submit"
                className="text-base font-medium leading-6 tracking-25 text-grayscale-gray2"
              >
                모두읽음
              </button>
            </form>
            <form action={allDeleteAlarm}>
              <button
                type="submit"
                className="text-base font-medium leading-6 tracking-25 text-grayscale-gray2"
              >
                전체 삭제
              </button>
            </form>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-grayscale-gray3 border-b border-grayscale-gray3">
          {alarms.map((alarm) => (
            <li
              key={alarm.alermId}
              className={`flex gap-2 px-4 py-7 ${alarm.isRead ? "bg-primary-background" : ""}`}
            >
              <div className="relative size-12 overflow-hidden rounded-[10px]">
                <Image
                  src={alarm.imageURL}
                  alt={`${alarm.alermId}의 알람 이미지`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-base font-normal leading-6 tracking-25">
                <span className="font-semibold">꼬순내</span>님이 회원님의 게시물에{" "}
                {alarm.isParentComment ? "댓글" : "답글"}을 남겼어요.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AlarmPage;
