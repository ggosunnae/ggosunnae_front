import LikeOff from "@/asset/icons/LikeOff.svg";
import LikeOffBlack from "@/asset/icons/LikeOffBlack.svg";
import LikeOn from "@/asset/icons/LikeOn.svg";

interface LikeToggleProps {
  liked: boolean;
  onToggle: () => void;
  likeOffIcon?: "default" | "black"; // 'default'는 LikeOff, 'black'은 LikeOffBlack
}

const LikeToggle = ({ liked, onToggle, likeOffIcon = "default" }: LikeToggleProps) => {
  const LikeOffIcon = likeOffIcon === "default" ? LikeOff : LikeOffBlack;

  return (
    <div className="flex cursor-pointer justify-end">
      <a
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        {liked ? <LikeOn width="24" height="24" /> : <LikeOffIcon width="24" height="24" />}
      </a>
    </div>
  );
};

export default LikeToggle;
