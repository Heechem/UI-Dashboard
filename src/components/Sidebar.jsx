import React from "react";
import {
  ArrowUpIcon,
  BellIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentSearchIcon,
  ExternalLinkIcon,
  HomeIcon,
  MailIcon,
} from "@heroicons/react/solid";
const Sidebar = () => {
  return (
    <div className="h-screen w-14 flex-none bg-slate-800 sm:w-20">
      <div className="flex h-20 items-center">
        <HomeIcon
          width={40}
          className=" sm-left-6 fixed left-3 text-gray-300"
        />
      </div>
      <div className="lef-3 fixed top-[100px] sm:left-6">
        <ChartBarIcon
          width={40}
          className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
        />

        <DocumentSearchIcon
          width={40}
          className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
        />

        <MailIcon
          width={40}
          className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
        />

        <CreditCardIcon
          width={40}
          className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
        />

        <BellIcon
          width={40}
          className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
        />
      </div>
      <div className="fixed bottom-4 left-3 sm:left-6">
        <a href="#top">
          <ArrowUpIcon
            width={40}
            className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
          />
        </a>

        <ExternalLinkIcon
          width={40}
          className="mb-4 rounded-lg bg-gray-600 p-2 text-gray-300"
        />
      </div>
    </div>
  );
};

export default Sidebar;
