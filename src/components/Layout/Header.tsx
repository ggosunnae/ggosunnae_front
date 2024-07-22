import Link from "next/link";

import MyPage from "@/asset/icons/MyPage.svg";
import Notification from "@/asset/icons/Notification.svg";
import Search from "@/asset/icons/Search.svg";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <Link href="/">LOGO</Link>
        <ul className="grid grid-cols-3">
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
            <MyPage />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
