import React from "react";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 w-full bg-gray-200 text-warmGray-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-center">
        <div className="text-xl font-bold">
          <NextLink href={"/"}>
            <a>Basic Utilities</a>
          </NextLink>
        </div>
        <nav className="flex space-x-4">
          <ul className="flex space-x-2 font-semibold items-center">
            <li>
              <NextLink href={"/diff"}>
                <a>Code Diff</a>
              </NextLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
