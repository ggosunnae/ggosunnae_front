import Image from "next/image";
import Link from "next/link";

const SearchPage = () => {
  return (
    <ul>
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <li key={index} className="mt-4 first:mt-0">
            <Link href={"/detail"} className="flex">
              <div className="relative size-[100px] flex-none overflow-hidden rounded-[10px]">
                <Image
                  src={"/image/test/puppy.jpg"}
                  alt="강아지 사진"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-2 flex-1">
                <div className="tracking-25er inline-block rounded-full border border-primary-normalBlue px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray2">
                  룩북
                </div>
                <h4 className="font-base tracking-25 mt-[2px] font-medium leading-6 text-grayscale-gray1">
                  하찮고 귀여운 댕댕이 좀 봐주세요
                </h4>
                <p className="tracking-25 mt-1 text-sm leading-[18.2px]">
                  댕댕이는 아침부터 저녁까지 활발하게 뛰어다녀요... 댕댕이는
                  아침부터 저녁까지 활발...
                </p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SearchPage;
