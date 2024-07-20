import Image from "next/image";

interface BookMarkToggleProps {
  bookmarked: boolean;
  onToggle: () => void;
}

const BookMarkToggle = (props: BookMarkToggleProps) => {
  const { bookmarked, onToggle } = props;

  return (
    <div className="flex cursor-pointer justify-end">
      <a
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        <Image
          src={
            bookmarked
              ? "/src/asset/icons/BookMarkOn.svg"
              : "/src/asset/icons/BookMarkOff.svg"
          }
          alt="북마크"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default BookMarkToggle;
