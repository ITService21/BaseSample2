import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuLinks }) => {
  const [expandedLinkId, setExpandedLinkId] = useState(null);

  const onMenuItemClick = (index) => {
    if (expandedLinkId === index) {
      setExpandedLinkId(null);
    } else {
      setExpandedLinkId(index);
    }
  };

  return (
    <div className="absolute w-[calc(100vw-2.5em)] h-[calc(100vh-9em)] shadow-lg bg-pink-200 top-20 left-5 rounded-lg">
      <div className="flex flex-col h-[calc(100%-4em)] m-8 overflow-auto">
        <ul>
          {menuLinks?.map((link, index) => (
            <div className="relative group" key={link.name}>
              <li
                className="px-3 py-4 font-semibold rounded-lg cursor-pointer lg:px-4"
                onClick={() => onMenuItemClick(index)}
              >
                <div className="flex justify-between text-white">
                  <p className="text-xl font-bold hover:text-gray-100">{link.name}</p>
                  <div className="w-8 h-8 p-1"></div>
                </div>
                {/* {expandedLinkId === index && (
                  <div className="w-full h-full">
                    <ul className="mt-4">
                      {link.subLinks.map((subLink) => (
                        <li
                          className="pl-1 py-4 font-semibold text-white rounded-lg cursor-pointer lg:px-4 "
                          key={subLink.name}
                        >
                          <Link to={subLink.link} className="flex items-center">
                            <div className="w-10 h-10 p-1">{subLink.icon}</div>
                            <div className="flex flex-col ml-5">
                              <p className="font-bold">{subLink.name}</p>
                              <p className="text-xs text-white">
                                {subLink.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}
              </li>
            </div>
          ))}
        </ul>
        <button className="rounded-[20px] bg-[#ff0088] px-[22px] py-[8px] text-white hover:bg-[#ff48a9]">
              Log in
            </button>
            <h2 className="text-center">OR</h2>
            <button className="rounded-[20px] bg-[#ff0088] px-[22px] py-[8px] text-white hover:bg-[#ff48a9]">
               Sign Up
            </button>
      </div>
    </div>
  );
};
