interface CategoryBarProps {
  selectedTab: "puppy" | "popularPuppy";
  handleTabClick: (tabName: "puppy" | "popularPuppy") => void;
}

const CategoryBar = (props: CategoryBarProps) => {
  const { selectedTab, handleTabClick } = props;

  return (
    <ul className="border-gray3 flex gap-6 border-b px-4 pt-2">
      <li
        className={`${selectedTab === "puppy" ? "border-b-2 border-black" : "cursor-pointer"}`}
        onClick={() => handleTabClick("puppy")}
      >
        꼬순내
      </li>
      <li
        className={`${
          selectedTab === "popularPuppy" ? "border-b-2 border-black" : "cursor-pointer"
        }`}
        onClick={() => handleTabClick("popularPuppy")}
      >
        인기댕
      </li>
    </ul>
  );
};

export default CategoryBar;
