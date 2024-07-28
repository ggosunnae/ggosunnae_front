import Image from "next/image";
import Link from "next/link";

import LeftArrow from "@/asset/icons/LeftArrow.svg";

const AlarmPage = () => {
  const response = {
    success: true,
    message: "유저 알림보기 성공",
    data: [
      {
        alermId: 1,
        postId: 1,
        imageURL: "/사진.jpg",
        isParentComment: true, // 댓글 알림,
        isRead: false,
      },
      {
        alermId: 2,
        postId: 2,
        imageURL: "/사진2.jpg",
        isParentComment: false, // 답댓글 알림
        isRead: true,
      },
      {
        alermId: 3,
        postId: 3,
        imageURL: "/사진2.jpg",
        isParentComment: false, // 답댓글 알림
        isRead: true,
      },
    ],
  };

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
              </div>{" "}
              <p className="text-base font-semibold leading-[22.4px] tracking-25">
                0월 첫째주 인기댕 구경하기
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="text-base font-medium leading-6 tracking-25 text-grayscale-gray2">
              모두읽음
            </button>
            <button className="text-base font-medium leading-6 tracking-25 text-grayscale-gray2">
              전체 삭제
            </button>
          </div>
        </div>
        <ul className="mt-4 divide-y divide-grayscale-gray3 border-b border-grayscale-gray3">
          {response.data.map((res) => (
            <li
              key={res.alermId}
              className={`flex gap-2 ${res.postId ? "bg-primary-background" : ""} px-4 py-7`}
            >
              <div className="size-12 rounded-[10px] bg-black"></div>
              <p className="text-base font-normal leading-6 tracking-25">
                <span className="font-semibold">꼬순내</span>님이 회원님의 게시물에{" "}
                {res.isParentComment ? "댓글" : "답글"}을 남겼어요.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AlarmPage;
