"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathNames.length - 1;
          const itemClasses = isLast ? `${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link; // Capitalize first letter of each link
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {link.toLowerCase() === "recipe" ? (
                  <span className="hover:no-underline">{itemLink}</span>
                ) : (
                  <Link href={href}>{itemLink}</Link>
                )}
              </li>
              {index !== pathNames.length - 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
