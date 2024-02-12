import React from "react";
import Navbar from "../../components/shared/Navbar";
import Search from "@/components/shared/Search";
import Filter from "@/components/shared/Filter";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumbs";

const Layout = ({ children }) => {
  return (
    <main className="roboto">
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
      <div className="mx-6 mt-6 flex items-center">
        <Breadcrumb
          homeElement={"Home"}
          separator={<span className="text-[12px] font-light"> {">"} </span>}
          activeClasses="text-[12px] font-semibold text-neutal-500"
          containerClasses="flex gap-1 items-center"
          listClasses="hover:underline text-[12px] font-light text-neutal-100"
          capitalizeLinks
        />
      </div>
      <div className="">
        <section className="">
          <div className="">{children}</div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
