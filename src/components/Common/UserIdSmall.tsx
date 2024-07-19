interface UserIdProps {
  username: string;
}

const UserId: React.FC<UserIdProps> = ({ username }) => {
  return (
    <ul className="flex gap-[10px]">
      <li className="h-[20px] w-[20px] items-center overflow-hidden rounded-full bg-[#CCCCCC] after:flex">
        <img src="" alt="프로필" />
      </li>
      <li>{username}</li>
    </ul>
  );
};

export default UserId;
