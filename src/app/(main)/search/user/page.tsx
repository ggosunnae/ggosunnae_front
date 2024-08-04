import Image from "next/image";
import Link from "next/link";

import getSearchUser from "@/actions/search/getSearchUser";
import { UserType } from "@/constant/user";

const page = async () => {
  const { data: users } = await getSearchUser();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.userId} className="mt-4 first:mt-0">
          <Link href={"/"} className="flex items-center gap-3">
            <div className="relative size-12 overflow-hidden rounded-full">
              <Image
                src={user.profileUrl}
                alt={`${user.userName} 이미지`}
                fill
                className="object-cover"
              />
            </div>
            <h4 className="text-xl font-medium leading-[30px] tracking-25 text-mono-black">
              {user.userName}
            </h4>
            <div
              className={`tracking-25er inline-block rounded-full border px-2 py-1 text-xs font-medium leading-[18px] text-grayscale-gray1 ${user.userType === "owner" ? "border-primary-lightBlue bg-primary-darkBlue" : "border-primary-darkBlue bg-primary-lightBlue"}`}
            >
              {UserType[user.userType]}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default page;
