import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function MobileHeader() {
  const [open, setOpen] = useState<boolean>(false);
  const path = usePathname();
  return (
    <div className="bg-white shadow-lg select-none fixed top-0 z-10 w-full">
      <div className="px-6 py-3 xl:hidden flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/images/logo/logo.png"
            width={60}
            height={60}
            alt="logo"
          />
        </Link>
        {open ? (
          <FaXmark
            onClick={() => setOpen(false)}
            size={24}
            className="text-gray-600 cursor-pointer"
          />
        ) : (
          <FaBars
            onClick={() => setOpen(true)}
            size={24}
            className="text-gray-600 cursor-pointer"
          />
        )}
      </div>

      <div
        className={`text-sm font-semibold w-full justify-center items-center
        bg-white p-3 text-gray-600 px-24 flex flex-col xl:hidden
        ${open ? "flex" : "hidden"}`}
      >
        <ul className="flex-col flex gap-y-1">
          <Link
            href={"/"}
            className={`min-w-20 p-2 text-center ${path === "/" && "active"}`}
          >
            <li className="capitalize">Home</li>
          </Link>
          <Link
            href={"/about-us"}
            className={`min-w-20 p-2 text-center ${
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
    </div>
  );
}
