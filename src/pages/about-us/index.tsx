import Banner from "@/components/banner";
import Layout from "@/layouts";
import Contact from "@/sections/contact";


const AboutUs = () => {
  return (
    <Layout>
      <Banner title="About Us" description={`Write About Your Project.`} />

      <h1 className="text-[#713F12]">Make design as per need</h1>

      <Contact />
    </Layout>
  );
};

export default AboutUs;
