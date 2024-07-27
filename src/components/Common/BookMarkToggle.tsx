import BookMarkOff from "@/asset/icons/BookMarkOff.svg";
import BookMarkOn from "@/asset/icons/BookMarkOn.svg";

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
        {bookmarked ? <BookMarkOn /> : <BookMarkOff />}
      </a>
    </div>
  );
};

export default BookMarkToggle;
