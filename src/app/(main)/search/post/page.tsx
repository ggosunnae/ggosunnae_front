import Image from "next/image";
import Link from "next/link";

import getSearchPost from "@/actions/search/getSearchPost";

const SearchPage = async () => {
  const { data: searchs } = await getSearchPost();

  return (
    <ul>
      {searchs.map((search) => (
        <li key={search.gsnId} className="mt-4 first:mt-0">
          <Link href={"/"} className="flex">
            <div className="relative size-[100px] flex-none overflow-hidden rounded-[10px]">
              <Image
                src={search.thumbNail}
                alt={`${search.title} 썸네일`}
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-2 flex-1">
              <div className="tracking-25er inline-block rounded-full border border-primary-normalBlue px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray2">
                {search.isLookbook ? "룩북" : "꼬순내"}
              </div>
              <h4 className="font-base mt-[2px] font-medium leading-6 tracking-25 text-grayscale-gray1">
                {search.title}
              </h4>
              <p className="mt-1 text-sm leading-[18.2px] tracking-25">
                내용 가져오는 fetch가 없음
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchPage;
