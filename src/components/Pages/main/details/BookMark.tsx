import BookMarkOff from "@/asset/icons/BookMarkOff.svg";
import BookMarkOn from "@/asset/icons/BookMarkOn.svg";

const BookMark = ({ status }: { status: boolean }) => {
  return (
    <div className="flex cursor-pointer items-center gap-1">
      {status ? <BookMarkOn width="24" height="24" /> : <BookMarkOff width="24" height="24" />}

      <span className="text-base font-medium leading-5">{status ? "" : "북마크"}</span>
    </div>
  );
};

export default BookMark;
