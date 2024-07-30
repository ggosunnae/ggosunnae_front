import BookMarkOff from "@/asset/icons/BookMarkOff.svg";
import BookMarkOffWht from "@/asset/icons/BookMarkOffWht.svg";
import BookMarkOn from "@/asset/icons/BookMarkOn.svg";

interface BookMarkToggleProps {
  bookmarked: boolean;
  onToggle: () => void;
  bookmarkOffIcon?: "default" | "white"; // 'default'는 BookMarkOff, 'white'는 BookMarkOffWht
}

const BookMarkToggle = ({
  bookmarked,
  onToggle,
  bookmarkOffIcon = "default",
}: BookMarkToggleProps) => {
  const BookMarkOffIcon = bookmarkOffIcon === "default" ? BookMarkOff : BookMarkOffWht;

  return (
    <div className="flex cursor-pointer justify-end">
      <a
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        {bookmarked ? (
          <BookMarkOn width="24" height="24" />
        ) : (
          <BookMarkOffIcon width="24" height="24" />
        )}
      </a>
    </div>
  );
};

export default BookMarkToggle;
