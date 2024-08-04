import Image from "next/image";
import Link from "next/link";

import getScrap from "@/actions/mypage/getScrap";

const mypageScrapPage = async () => {
  const { data: scraps } = await getScrap();

  return (
    <div className="grid grid-cols-2 gap-[15px] p-4">
      {scraps.map((scrap) => (
        <Link
          key={scrap.postId}
          href={"/"}
          className="relative w-full overflow-hidden rounded-[10px] after:block after:pb-[calc(240/164*100%)]"
        >
          <Image src={scrap.imageURL} alt="포스터 이미지" fill />
        </Link>
      ))}
    </div>
  );
};

export default mypageScrapPage;
