import Banner from "@/components/banner";
import CustomButton from "@/components/comman/button";
import InputField from "@/components/comman/input";
import TextArea from "@/components/comman/textarea";

import Layout from "@/layouts";
import React from "react";
import { FaClock, FaEnvelope, FaPaperPlane, FaPhone } from "react-icons/fa6";

function ContactUs() {
  return (
    <Layout>
      <Banner title="Contact" />
      <section className="p-6 xl:px-24">
        <div className="grid md:grid-cols-2 gap-6">
          <form className="bg-gray-100 rounded-2xl p-5">
            <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <InputField label="Name" placeholder="Enter your name" />
              <InputField label="Email" placeholder="Enter your email" />
            </div>
            <InputField label="Subject" placeholder="Enter your subject" />
            <TextArea
              rows={5}
              label="Message"
              placeholder="Enter your message"
            />
            <CustomButton
              title="Send Message"
              className="mt-5"
              IconRight={() => <FaPaperPlane size={20} />}
            />
          </form>
          <div className="grid gap-6">
            <div className="flex flex-col gap-3 justify-center bg-gray-100 p-10 rounded-2xl">
              <FaEnvelope size={60} className="text-primary-500" />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Email</h2>
                <p className="text-lg font-semibold text-gray-500">
                  example@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center bg-gray-100 p-10 rounded-2xl">
              <FaPhone size={60} className="text-primary-500" />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Phone Number
                </h2>
                <p className="text-lg font-semibold text-gray-500">
                  +91 000000000
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 justify-center bg-gray-100 p-10 rounded-2xl">
              <FaClock size={60} className="text-primary-500" />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Opening Hours
                </h2>
                <p className="text-lg font-semibold text-gray-500">8AM- 8PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactUs;
