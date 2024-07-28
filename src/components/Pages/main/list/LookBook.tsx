import RightArrowWht from "@/asset/icons/rightarrowwht.svg";
import CardItemLookBook from "@/components/Carousel/CardItemLookBook";
import CardOotdLookBook from "@/components/Carousel/CardItemLookBook";
import CardSizeLookBook from "@/components/Carousel/CardSizeLookBook";

interface LookBookProps {
  onCategoryClick: (category: string) => void;
}

export default function LookBook({ onCategoryClick }: LookBookProps) {
  return (
    <>
      <button
        className="flex items-center justify-between px-[16px] pt-[24px]"
        onClick={() => onCategoryClick("ootd")}
      >
        <h4 className="text-[20px] font-semibold text-white">오늘 뭐 입지? #OOTD</h4>
        <RightArrowWht />
      </button>
      <CardOotdLookBook />

      <button
        className="flex items-center justify-between px-[16px] pt-[24px]"
        onClick={() => onCategoryClick("size")}
      >
        <h4 className="text-[20px] font-semibold text-white">사이즈별로 스타일 구경하기</h4>
        <RightArrowWht />
      </button>
      <CardSizeLookBook />

      <button
        className="flex items-center justify-between px-[16px] pt-[24px]"
        onClick={() => onCategoryClick("item")}
      >
        <h4 className="text-[20px] font-semibold text-white">포인트 아이템</h4>
        <RightArrowWht />
      </button>
      <CardItemLookBook />
    </>
  );
}
