import React, { useState } from "react";
import NextLink from "next/link";
function Index() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4">
      <NextLink href={"/diff"}>
        <a className="p-4 bg-warmGray-700 text-gray-200 rounded-md hover:ring w-full md:w-1/3 flex items-center justify-center uppercase text-lg font-semibold">
          String Diff
        </a>
      </NextLink>
    </div>
  );
}

export default Index;
