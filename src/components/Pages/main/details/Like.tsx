import LikeOff from "@/asset/icons/LikeOff.svg";
import LikeOn from "@/asset/icons/LikeOn.svg";

const Like = ({ count, status }: { count: number; status: boolean }) => {
  return (
    <button type="button" className="flex cursor-pointer items-center gap-1">
      {status ? <LikeOn width="24" height="24" /> : <LikeOff width="24" height="24" />}
      <span className="text-base font-medium leading-5">
        {status ? (count >= 99 ? "99+" : count) : "좋아요"}
      </span>
    </button>
  );
};

export default Like;
