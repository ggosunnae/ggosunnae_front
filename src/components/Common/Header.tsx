import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-4">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/image/auth/h_logo.png"}
            width={86}
            height={44}
            alt="꼬순내"
          />
        </Link>
        <ul className="flex gap-[20px]">
          <li>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1056_11291)">
                  <path
                    d="M11.6641 18.8997C15.8969 18.8997 19.3283 15.3404 19.3283 10.9499C19.3283 6.55927 15.8969 3 11.6641 3C7.43135 3 4 6.55927 4 10.9499C4 15.3404 7.43135 18.8997 11.6641 18.8997Z"
                    stroke="#111111"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.996 16.8906L20.0006 19.9993"
                    stroke="#111111"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1056_11291">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1056_11296)">
                  <path
                    d="M9.74122 17.4V18.12C9.74122 18.8838 10.0319 19.6164 10.5492 20.1565C11.0666 20.6966 11.7683 21 12.5 21C13.2317 21 13.9334 20.6966 14.4508 20.1565C14.9681 19.6164 15.2588 18.8838 15.2588 18.12V17.4M6.31024 9.47996C6.3091 8.62605 6.46987 7.78034 6.78327 6.99159C7.09668 6.20284 7.55653 5.48665 8.13631 4.88429C8.7161 4.28194 9.40435 3.80534 10.1614 3.48196C10.9184 3.15858 11.7293 2.99482 12.5473 3.00012C15.9604 3.02661 18.6904 5.98825 18.6904 9.56131V10.2C18.6904 13.4234 19.3365 15.2939 19.9054 16.3162C19.9667 16.4255 19.9993 16.5496 20 16.6762C20.0006 16.8028 19.9693 16.9274 19.9091 17.0373C19.849 17.1472 19.7621 17.2386 19.6573 17.3023C19.5525 17.366 19.4334 17.3997 19.3122 17.4H5.68784C5.56656 17.3997 5.4475 17.366 5.34269 17.3023C5.23787 17.2386 5.151 17.1471 5.09083 17.0372C5.03067 16.9273 4.99934 16.8027 5.00001 16.6761C5.00068 16.5495 5.03332 16.4253 5.09465 16.3161C5.66393 15.2937 6.31024 13.4232 6.31024 10.2L6.31024 9.47996Z"
                    stroke="#111111"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1056_11296">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
          <li>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1056_11300)">
                  <path
                    d="M11.9736 13.1077C14.6393 13.1077 16.7771 10.8369 16.7771 8.06769C16.7771 5.29846 14.6393 3 11.9736 3C9.30792 3 7.17009 5.27077 7.17009 8.04C7.17009 10.8092 9.30792 13.1077 11.9736 13.1077ZM11.9736 4.32923C13.9267 4.32923 15.5103 5.99077 15.5103 8.04C15.5103 10.0892 13.9267 11.7508 11.9736 11.7508C10.0205 11.7508 8.43695 10.1169 8.43695 8.06769C8.43695 6.01846 10.0205 4.32923 11.9736 4.32923ZM3.63343 21H20.3666C20.7097 21 21 20.6954 21 20.3354C21 16.8462 18.2815 13.9938 14.956 13.9938H9.04399C5.71848 13.9938 3 16.8462 3 20.3354C3 20.6954 3.29032 21 3.63343 21ZM9.04399 15.3231H14.956C17.3842 15.3231 19.3636 17.2062 19.6804 19.6708H4.31965C4.63636 17.2062 6.61584 15.3231 9.04399 15.3231Z"
                    fill="#111111"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1056_11300">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;