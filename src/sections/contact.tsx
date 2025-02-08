import CustomButton from "@/components/comman/button";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="bg-gray-100 p-6 lg:px-24">
      <div className="py-10 text-center">
        <h2 className="font-extrabold text-3xl xl:text-4xl text-gray-700">
          Join Us in Building a Prosperous Future
        </h2>
        <p className="mt-4 text-gray-500 text-lg lg:px-20">
         Write here Your lines.
          <br />
        </p>
        <Link href="/contact" className="flex justify-center mt-6">
          <CustomButton
            title="Contact Us"
            className="lg:w-max"
            IconRight={() => <FaPaperPlane size={20} />}
          />
        </Link>
      </div>
    </section>
  );
}
