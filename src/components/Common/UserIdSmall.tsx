import React from "react";

interface UserIdProps {
  username: string;
}

const UserIdSmall = (props: UserIdProps) => {
  const { username } = props;

  return (
    <ul className="flex gap-[10px]">
      <li className="h-[20px] w-[20px] items-center overflow-hidden rounded-full bg-[#CCCCCC] after:flex">
        <img src="" alt="프로필" />
      </li>
      <li>{username}</li>
    </ul>
  );
};

export default UserIdSmall;
