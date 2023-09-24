import { SearchIcon } from "@heroicons/react/solid";
import { TextInput } from "@tremor/react";
import React from "react";

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full items-center justify-between p-2 sm:flex"
    >
      <h1 className="font-bold text-gray-300">Dashboard</h1>
      <div className="py-2">
        <TextInput placeholder="Search..." icon={SearchIcon} />
      </div>
    </div>
  );
};

export default Navbar;
