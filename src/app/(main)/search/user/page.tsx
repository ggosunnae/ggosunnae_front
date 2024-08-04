import Link from "next/link";

const UserType: { [key: string]: string } = {
  owner: "댕주",
  friend: "댕주",
};

const page = () => {
  const response = {
    success: true,
    message: "유저 검색 성공",
    data: [
      {
        userId: 1,
        profileUrl: "/댕주.jpg",
        userName: "댕댕이",
        userType: "owner",
      },
      {
        userId: 2,
        profileUrl: "/댕친1.jpg",
        userName: "댕댕이최고",
        userType: "friend",
      },
      {
        userId: 3,
        profileUrl: "/댕주2.jpg",
        userName: "댕청",
        userType: "owner",
      },
      {
        userId: 4,
        profileUrl: "/댕친2.jpg",
        userName: "댕댕이최고2",
        userType: "friend",
      },
    ],
  };

  return (
    <ul>
      {response.data.map((res) => (
        <li key={res.userId} className="mt-4 first:mt-0">
          <Link href={"/"} className="flex items-center gap-3">
            <div className="size-12 rounded-full bg-[#D9D9D9]"></div>
            <h4 className="text-xl font-medium leading-[30px] tracking-25 text-mono-black">
              {res.userName}
            </h4>
            <div
              className={`tracking-25er inline-block rounded-full border px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray1 ${res.userType === "owner" ? "border-primary-lightBlue bg-primary-darkBlue" : "border-primary-darkBlue bg-primary-lightBlue"}`}
            >
              {UserType[res.userType]}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default page;
