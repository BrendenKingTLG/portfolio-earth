import React from "react";
import { useRef, useState } from "react";

export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="flex items-center lg:justify-start justify-between flex-wrap bg-gray-300  p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <a href="/portfolio-earth/">Brenden King</a>
        </span>
      </div>
      <ul className="hidden text-black lg:flex gap-8 ">
        <li>
          <a href="/portfolio-earth/#/about">About</a>
        </li>
      </ul>
      <div
        className="block lg:hidden"
        onClick={() => {
          setMobileNavOpen(!mobileNavOpen);
        }}
      >
        <button className="flex items-center px-3 py-2 border rounded text-black-200 border-teal-400 hover:text-black hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {mobileNavOpen && (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/portfolio-earth/#/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
            >
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
