import React from "react";
import Navbar from "../../components/shared/Navbar";
import Search from "@/components/shared/Search";

const Layout = ({ children }) => {
  return (
    <main className=" ">
      <Navbar />
      <div className="my-4 flex justify-center sm:items-center ">
        <Search />
      </div>
      <div className="">
        <section className="">
          <div className="">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
