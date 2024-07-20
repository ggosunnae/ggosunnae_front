import Image from "next/image";

interface LikeToggleProps {
  liked: boolean;
  onToggle: () => void;
}

const LikeToggle = (props: LikeToggleProps) => {
  const { liked, onToggle } = props;

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
            liked
              ? "/src/asset/icons/LikeOn.svg"
              : "/src/asset/icons/LikeOff.svg"
          }
          alt="좋아요"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default LikeToggle;
