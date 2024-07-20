import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between">
        <Link href="/">LOGO</Link>
        <ul className="grid grid-cols-3">
          <li>
            <Link href="">
              <Image
                src="/src/asset/icons/Search.svg"
                alt="search"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src="/src/asset/icons/Notification.svg"
                alt="search"
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Image
              src="/src/asset/icons/MyPage.svg"
              alt="search"
              width={26}
              height={24}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
