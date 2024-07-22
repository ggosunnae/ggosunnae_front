import Image from "next/image";

interface UserIdProps {
  username: string;
}

const UserIdSmall = (props: UserIdProps) => {
  const { username } = props;

  return (
    <ul className="flex gap-[10px]">
      <li className="h-[20px] w-[20px] items-center overflow-hidden rounded-full bg-[#CCCCCC] after:flex">
        <Image src="/path/to/profile.jpg" alt="프로필" width={20} height={20} />
      </li>
      <li>{username}</li>
    </ul>
  );
};

export default UserIdSmall;
