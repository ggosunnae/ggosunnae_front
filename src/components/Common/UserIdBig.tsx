interface UserIdBigProps {
  username: string;
}

const UserIdBig: React.FC<UserIdBigProps> = ({ username }) => {
  return (
    <ul className="flex gap-[10px]">
      <li className="flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full bg-[#CCCCCC]">
        <img src="" alt="프로필" />
      </li>
      <li className="text-[16px]">{username}</li>
    </ul>
  );
};

export default UserIdBig;
