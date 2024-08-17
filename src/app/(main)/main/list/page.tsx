import Link from "next/link";

import getList from "@/actions/main/list/getList";
import Chips from "@/components/Common/Chips";
import Mansonry from "@/components/Pages/main/Mansonry";
import SlideCard from "@/components/Pages/main/SlideCard";

export default async function ListPage() {
  const { data } = await getList();

  return (
    <main className="bg-white">
      <ul className="border-gray3 flex items-center gap-6 border-b px-4 tracking-tight">
        <li className="border-b-2 border-black py-2 font-extrabold">
          <Link href={"/main/list"}>꼬순내</Link>
        </li>
        <li className="py-2 font-medium">
          <Link href={"/main/popular"}>인기댕</Link>
        </li>
      </ul>
      <div className="flex gap-3 px-4 py-2">
        <Chips label="애착인형" />
        <Chips label="😄😠😢😝" />
        <Chips label="챌린지" />
      </div>
      <div className="border-gray4 border-b-[8px] pb-2 pl-4">
        <SlideCard TopGSNs={data.TopGSNs} />
      </div>
      <Mansonry GSNs={data.GSNs} />
    </main>
  );
}
