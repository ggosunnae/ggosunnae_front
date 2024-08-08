"use client";

import InfoToggle from "@/components/Common/InfoToggle";

const mypageSetPage = () => {
  return (
    <div className="px-4 py-6 tracking-tight">
      <div className="flex justify-between">
        <p className="text-base font-medium leading-6">댓글 알림</p>
        <InfoToggle isChecked onToggle={() => {}} />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-base font-medium leading-6">마게팅 동의</p>
          <InfoToggle isChecked={false} onToggle={() => {}} />
        </div>
        <p className="mt-2 text-sm font-medium leading-5 text-grayscale-gray2">
          휴대폰 본인 인증 후 실시간 인기댕 및 서비스 내 새로운 기능/업데 이트 소식 받기
        </p>
      </div>
    </div>
  );
};

export default mypageSetPage;
