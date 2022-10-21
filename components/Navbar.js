import React from "react";
import Destemr from "./Destemr";

const Navbar = () => {
  return (
    <>
      {/* image that disappears on mobile and allows the navbar to be on the very top of the page */}
      <Destemr />

      <div className="navbar bg-white border-b-[2px] border-t-[2px] border-black sticky top-0 z-50 h-1 py-1">
        <div className="navbar-start">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>1111 111111111111 1111111 111111 11111111</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}

          {/* if the user is on mobile show the image from Destemr. Otherwise, display daisyUI */}
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
            alt="background"
            className=" xs:block md:hidden"
          />
          {/* <h1 className="hidden md:block">yo</h1> */}

          {/* <div className="flex space-x-9 py-4 px-8"> */}
          {/* do the same styling as above, however make it properly responsive */}
          <div
            className="flex space-x-9 px-8 xl:px-20
            xl:space-x-20 text-[17px]
          "
          >
            <a
              href="#"
              class="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            >
              Features
            </a>
            <a
              href="#"
              class="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              class="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            >
              University
            </a>
            <a
              href="#"
              class="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            >
              Blog
            </a>
            <a
              href="#"
              class="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            >
              Discover
            </a>
          </div>
        </div>
        <div
          className="navbar-end h-[100%] 
            
        "
        >
          <button className="border-black border-l-[2px] border-r-[2px] hover:bg-pink-400 hover:border-l-[2px] hover:border-t-[2px] hover:border-r-[2px] border-b-[2px] btn-lg  hidden md:block">
            Login
          </button>
          <button className="border-black bg-black hover:text-black text-white hover:bg-pink-400  btn-lg  hidden md:block ">
            Start Selling
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2 cursor-pointer md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
