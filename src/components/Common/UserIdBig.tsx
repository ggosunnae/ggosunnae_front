import Image from "next/image";

interface UserIdBigProps {
  username: string;
}

const UserIdBig = (props: UserIdBigProps) => {
  const { username } = props;

  return (
    <ul className="flex gap-[10px]">
      <li className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
        <Image src="/path/to/profile.jpg" alt="프로필" width={24} height={24} />
      </li>
      <li className="text-[16px]">{username}</li>
    </ul>
  );
};

export default UserIdBig;
