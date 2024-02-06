import React from "react";
import Navbar from "../../components/shared/Navbar";

const Layout = ({ children }) => {
  return (
    <main className=" ">
      <Navbar />
      <div className="">
        <section className="">
          <div className="">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
