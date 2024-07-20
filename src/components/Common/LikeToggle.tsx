import React from "react";

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
        <img
          src={liked ? "image/icons/like_on.svg" : "image/icons/like_off.svg"}
          alt="좋아요"
        />
      </a>
    </div>
  );
};

export default LikeToggle;
