import Link from "next/link";

import BNB from "@/components/Common/BNB";
import PictureList from "@/components/Pages/lookbook/listmore/PictureList";

export default function LookBookListMorePage() {
  return (
    <main className="bg-black text-white">
      <div className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        <p className="text-xl tracking-tight px-4 py-4">사이즈별로 스타일 구경하기</p>
        <div className="px-4">
        <PictureList />
        </div>
        <Link href={"/main/lookbook/listmore"}></Link>

        <BNB />
      </div>
    </main>
  );
}
