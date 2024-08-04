import Image from "next/image";
import Link from "next/link";

const SearchPage = () => {
  const response = {
    success: true,
    message: "게시글 검색 성공",
    data: [
      {
        gsnId: 1,
        thumbNail: "/사진.jpg",
        title: "하찮고 귀여운 댕댕이좀",
        isLookbook: false,
        isGSN: true,
      },
      {
        gsnId: 2,
        thumbNail: "/사진2.jpg",
        title: "게시글 올림",
        isLookbook: false,
        isGSN: true,
      },
      {
        gsnId: 3,
        thumbNail: "/룩북.jpg",
        title: "룩북 댕댕이",
        isLookbook: true,
        isGSN: false,
      },
      {
        gsnId: 4,
        thumbNail: "/룩북2.jpg",
        title: "힙스터 보리",
        isLookbook: true,
        isGSN: false,
      },
    ],
  };

  return (
    <ul>
      {response.data.map((res) => (
        <li key={res.gsnId} className="mt-4 first:mt-0">
          <Link href={"/detail"} className="flex">
            <div className="relative size-[100px] flex-none overflow-hidden rounded-[10px]">
              <Image src={res.thumbNail} alt={`res.title 썸네일`} fill className="object-cover" />
            </div>
            <div className="ml-2 flex-1">
              <div className="tracking-25er inline-block rounded-full border border-primary-normalBlue px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray2">
                {res.isLookbook ? "룩북" : "꼬순내"}
              </div>
              <h4 className="font-base mt-[2px] font-medium leading-6 tracking-25 text-grayscale-gray1">
                {res.title}
              </h4>
              <p className="mt-1 text-sm leading-[18.2px] tracking-25">
                댕댕이는 아침부터 저녁까지 활발하게 뛰어다녀요... 댕댕이는 아침부터 저녁까지 활발...
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchPage;
