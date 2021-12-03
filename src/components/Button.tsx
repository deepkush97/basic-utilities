import React, { FC } from "react";

export const Button: FC<{ onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      className="hover:border-blue-700 border-blue-500 bg-blue-700 hover:bg-blue-500  text-warmGray-200 px-4 py-1 text-base shadow-s hover:shadow-m border-2 outline-none focus:outline-none transition-all duration-150 ease-in-out disabled:cursor-not-allowed"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
