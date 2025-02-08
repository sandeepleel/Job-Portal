import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { FaExternalLinkAlt } from "react-icons/fa";

export default function Header() {
  const path = usePathname();
  return (
    <div className="fixed shadow-lg top-0 z-10 text-sm font-bold w-full justify-between items-center bg-white py-3.5 text-gray-600 px-24 hidden xl:flex">
      <Link href={"/"}>
        <Image src="/images/logo/logo.png" width={60} height={60} alt="logo" />
      </Link>
      <ul className="flex-row flex gap-x-5">
        <Link
          href={"/"}
          className={`hover:text-primary-500 min-w-20 p-2 text-center ${
            path === "/" && "active"
          }`}
        >
          <li className="capitalize">Home</li>
        </Link>
        <Link
          href={"/about-us"}
          className={`hover:text-primary-500 min-w-20 p-2 text-center ${
            path === "/about-us" && "active"
          }`}
        >
          <li className="capitalize">About Us</li>
        </Link>

        <Link
          href={"/contact"}
          className={`hover:text-primary-500 min-w-20 p-2 text-center ${
            path === "/contact" && "active"
          }`}
        >
          <li className="capitalize">contact</li>
        </Link>
      </ul>
    </div>
  );
}
