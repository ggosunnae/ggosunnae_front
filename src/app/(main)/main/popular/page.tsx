import Image from "next/image";
import Link from "next/link";

import BNB from "@/components/Common/BNB";
import SmallSlideCard from "@/components/Pages/main/SmallSlideCard";

function PopularPage() {
  return (
    <main className="bg-white">
      <div className="no-scrollbar h-[calc(100vh-100px)] overflow-y-scroll">
        <ul className="border-gray3 flex items-center gap-6 border-b px-4 tracking-tight">
          <li className="py-2 font-medium">
            <Link href={"/main/list"}>꼬순내</Link>
          </li>
          <li className="border-b-2 border-black py-2 font-extrabold">
            <Link href={"/main/popular"}>인기댕</Link>
          </li>
        </ul>

        <div
          className="mx-4 my-3 flex items-center gap-3 rounded-[10px] px-4 py-[14px]"
          style={{
            backgroundImage:
              "radial-gradient(50% 50% at 50% 50%, #FFD863 0%, rgba(255, 216, 99, 0.4) 100%)",
          }}
        >
          <div className="flex size-[60px] items-center justify-center rounded-full bg-white/60">
            <Image src="/image/crown.png" width={36} height={36} alt="왕관" />
          </div>
          <p className="font-semibold tracking-tight">실시간 인기댕 설명 배너</p>
        </div>

        <div className="border-gray4 border-b-[8px]">
          <h3 className="px-4 py-6 text-xl font-semibold leading-[26px] tracking-tight">
            실시간 <span className="text-[#35BBF5]">꼬순내</span> 인기댕
          </h3>

          <div className="relative mb-7 pl-4">
            <div className="absolute -top-6 left-2 z-3">
              <Image src={"/image/auth/crown.png"} width={48} height={48} alt="왕관" />
            </div>

            <SmallSlideCard />
          </div>
        </div>

        <h3 className="px-4 py-6 text-xl font-semibold leading-[26px] tracking-tight">
          실시간 <span className="text-[#35BBF5]">룩북</span> 인기댕
        </h3>
        <div className="relative mb-7 pl-4">
          <div className="absolute -top-6 left-2 z-3">
            <Image src={"/image/auth/crown.png"} width={48} height={48} alt="왕관" />
          </div>
          <SmallSlideCard />
        </div>
        <BNB />
      </div>
    </main>
  );
}

export default PopularPage;
