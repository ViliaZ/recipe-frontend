"use client";
import { useState } from "react";
import { RecipeContext } from "../../context/RecipeContext.js";
import Navbar from "../../components/shared/Navbar";
import Search from "@/components/shared/Search";
import Filter from "@/components/shared/Filter";
import Footer from "@/components/shared/Footer";
import Breadcrumb from "@/components/shared/Breadcrumbs";

const Layout = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <RecipeContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
      }}
    >
      <main className="roboto relative mx-auto max-w-screen-2xl">
        <Navbar />
        <div className="mx-auto max-w-screen-lg md:px-6 lg:px-8">
          <div className="my-4 flex justify-center ">
            <Search />
          </div>

          <div className="mx-6 flex flex-col">
            <h1 className="mb-1 text-lg font-medium tracking-wide text-neutral-500">
              Explore Recipes
            </h1>
            <Filter />
          </div>

          <div className="mx-6 mt-6 flex items-center">
            <Breadcrumb
              homeElement={"Home"}
              separator={
                <span className="text-[12px] font-light"> {">"} </span>
              }
              activeClasses="text-[12px] font-semibold text-neutal-500"
              containerClasses="flex gap-1 items-center"
              listClasses="hover:underline text-[12px] font-light text-neutal-100"
              capitalizeLinks
            />
          </div>
          <section className=" pb-56 sm:pb-44">
            <div className="">{children}</div>
          </section>
          <Footer lassName="mx-auto max-w-screen-lg md:px-6 lg:px-8" />
        </div>
      </main>
    </RecipeContext.Provider>
  );
};

export default Layout;
