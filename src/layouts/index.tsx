import React from "react";
import Header from "@/layouts/header";
import MobileHeader from "@/layouts/header/mobile";
import Footer from "@/layouts/footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
