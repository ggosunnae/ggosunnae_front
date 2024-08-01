import Image from "next/image";
import Link from "next/link";

import MyPage from "@/asset/icons/MyPage.svg";
import Notification from "@/asset/icons/Notification.svg";
import Search from "@/asset/icons/Search.svg";

const Header = () => {
  return (
    <header className="px-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src={"/image/auth/h_logo.png"} width={86} height={44} alt="꼬순내" />
        </Link>
        <ul className="flex gap-[20px]">
          <li>
            <Link href="">
              <Search />
            </Link>
          </li>
          <li>
            <Link href="">
              <Notification />
            </Link>
          </li>
          <li>
            <Link href="">
              <MyPage />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
