interface CategoryBarProps {
  selectedTab: "puppy" | "popularPuppy";
  handleTabClick: (tabName: "puppy" | "popularPuppy") => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedTab,
  handleTabClick,
}) => {
  return (
    <ul className="border-gray3 flex gap-[24px] border-b-[1px] px-[16px] pt-[8px]">
      <li
        className={`${selectedTab === "puppy" ? "border-b-2 border-black" : "cursor-pointer"}`}
        onClick={() => handleTabClick("puppy")}
      >
        꼬순내
      </li>
      <li
        className={`${selectedTab === "popularPuppy" ? "border-b-2 border-black" : "cursor-pointer"}`}
        onClick={() => handleTabClick("popularPuppy")}
      >
        인기댕
      </li>
    </ul>
  );
};

export default CategoryBar;
