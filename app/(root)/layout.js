import React from "react";
import Navbar from "../../components/shared/Navbar";
import Search from "@/components/shared/Search";
import Filter from "@/components/shared/Filter";

const Layout = ({ children }) => {
  return (
    <main className=" ">
      <Navbar />
      <div className="my-4 flex justify-center ">
        <Search />
      </div>
      <div className="mx-6 flex flex-col">
        <h1 className="roboto mb-1 text-lg font-medium tracking-wide text-neutral-500">
          Explore Recipes
        </h1>
        <Filter />
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
