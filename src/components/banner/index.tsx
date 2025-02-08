import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa6";

interface Props {
  title: string;
  description?: string;
  breadcrumb?: string;
}

function Banner({ title, description, breadcrumb }: Props) {
  return (
    <div className="min-h-full relative">
      <Image
        src={"/images/banners/banner.jpg"}
        width={1920}
        height={1080}
        alt="Banner"
        className="absolute -z-0 w-full h-full top-0 left-0 object-cover"
      />
      <div className="z-0 relative px-6 py-24 lg:px-24 lg:py-40 banner-gradient">
        <ul className="flex flex-row gap-x-5 items-center">
          <Link href={"/"}>
            <li className="text-gray-500 font-semibold hover:text-primary-500">
              Home
            </li>
          </Link>
          <FaCircle size={6} className="text-gray-500" />
          <li className="text-primary-500 font-semibold">
            {!breadcrumb ? title : breadcrumb}
          </li>
        </ul>
        <h1 className="text-gray-100 text-6xl font-semibold mt-10">{title}</h1>
        <p className="text-gray-400 text-lg mt-10 md:leading-relaxed xl:w-2/3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Banner;
