import Image from "next/image";
import Link from "next/link";

function PopularPage() {
  return (
    <main className="bg-white">
      <ul className="border-gray3 flex items-center gap-6 border-b px-4 tracking-tight">
        <li className="py-2 font-medium">
          <Link href={"/main/list"}>꼬순내</Link>
        </li>
        <li className="border-b-2 border-black py-2 font-extrabold">
          <Link href={"/main/popular"}>인기댕</Link>
        </li>
      </ul>

      <div className="flex items-center gap-3 rounded-[10px] px-4 py-[14px]">
        <div className="flex size-[60px] items-center justify-center rounded-full bg-white opacity-60">
          <Image src="/asset/icons/crown.png" width={36} height={36} alt="왕관" />
        </div>
        <p className="font-semibold tracking-tight">실시간 인기댕 설명 배너</p>
      </div>

      <div className="border-gray4 border-b-[8px]">
        <h3 className="px-4 py-6 text-xl font-semibold leading-[26px] tracking-tight">
          실시간 <span className="text-[#35BBF5]">꼬순내</span> 인기댕
        </h3>

        <div className="relative mx-4 mb-7">
          <div className="absolute -top-6 left-0 z-3">
            <Image src={"/image/auth/crown.png"} width={48} height={48} alt="왕관" />
          </div>
          <div className="relative w-[164px] overflow-hidden rounded-[10px] after:block after:pb-[calc(216/164*100%)]">
            <Image className="object-cover" fill src="/image/test/puppy.jpg" alt="강아지" />
            <div className="absolute bottom-2 w-full px-2">
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap pb-[2px] text-sm font-semibold leading-5 tracking-tight text-white">
                하찮고 귀여운 댕댕이를 좀 보세요 보세요 보세요 보세요 보세요
              </p>
              <div className="flex gap-2">
                <div className="relative size-5 rounded-full">
                  <Image className="object-cover" fill src="/image/test/puppy.jpg" alt="강아지" />
                </div>
                <span className="text-sm font-medium leading-5 tracking-tight text-white">
                  꼬순내
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="px-4 py-6 text-xl font-semibold leading-[26px] tracking-tight">
        실시간 <span className="text-[#35BBF5]">룩북</span> 인기댕
      </h3>
    </main>
  );
}

export default PopularPage;
