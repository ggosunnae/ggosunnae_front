import Link from "next/link";

import getLookbookList from "@/actions/lookbook/list/getLookbookList";
import RightArrow from "@/asset/icons/rightarrowwht.svg";
import BNB from "@/components/Common/BNB";
import Chips from "@/components/Common/Chips";
import OotdSlider from "@/components/Pages/lookbook/list/OotdSlider";
import PointSlider from "@/components/Pages/lookbook/list/PointSlider";
import SizeSlider from "@/components/Pages/lookbook/list/SizeSlider";

export default async function LookBookListPage() {
  const { data } = await getLookbookList();

  return (
    <main className="bg-black">
      <div className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        <Link
          href={"/lookbook/listmore?type=ootd"}
          className="mb-[10px] mt-10 flex items-center justify-between px-4 leading-[30px]"
        >
          <p className="text-xl font-semibold tracking-tight text-white">오늘 뭐 입지? #OOTD</p>
          <RightArrow width="24" height="24" />
        </Link>
        <div className="flex gap-3 px-4 py-2">
          <Chips label="스트릿" />
          <Chips label="하이엔드" />
          <Chips label="코스프레" />
          <Chips label="시밀러룩" />
        </div>
        <div className="mb-[14px]">
          <OotdSlider data={data} />
        </div>
        <Link
          href={"/lookbook/listmore?type=size"}
          className="flex items-center justify-between px-4 leading-[30px]"
        >
          <p className="text-xl font-semibold tracking-tight text-white">
            사이즈별로 스타일 구경하기
          </p>
          <RightArrow width="24" height="24" />
        </Link>
        <div className="flex gap-3 px-4 py-2">
          <Chips label="XS~S" />
          <Chips label="M~L" />
          <Chips label="XL+" />
        </div>
        <div className="mb-6 pl-2">
          <SizeSlider data={data} />
        </div>
        <Link
          href={"/lookbook/listmore?type=point"}
          className="mb-[6px] flex items-center justify-between px-4 leading-[30px]"
        >
          <p className="text-xl font-semibold tracking-tight text-white">포인트 아이템</p>
          <RightArrow width="24" height="24" />
        </Link>
        <div className="flex gap-3 px-4 py-2">
          <Chips label="캡모자" />
          <Chips label="맨투맨" />
          <Chips label="우비" />
          <Chips label="썬글라스" />
          <Chips label="기타" />
        </div>
        <div className="mb-[68px] pl-2">
          <PointSlider data={data} />
        </div>
        <BNB />
      </div>
    </main>
  );
}
