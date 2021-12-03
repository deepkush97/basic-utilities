import React, { FC } from "react";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";

export const Main: FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-grow overflow-auto">
        <div className="w-screen max-w-7xl mx-auto">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
