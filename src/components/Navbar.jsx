import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { LuMenu, LuX } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";

const navLinks = [
  { id: 1, title: "For individual" },
  { id: 2, title: "For nonprofit" },
  { id: 3, title: "For advisors" },
  { id: 4, title: "About us" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-auto">
      <div className="md:w-[67%] w-[90%] mx-auto flex justify-between items-center">
       
        <div className="w-48">
          <img className="" src={Logo} alt="logo" />
        </div>
        <div className="space-x-8 hidden md:flex">
          {navLinks.map((item) => {
            return <span className="hover:text-custom-pink cursor-pointer">{item.title}</span>;
          })}
        </div>
        <div className="space-x-2 hidden md:flex">
          <button className=" text-slate-600 font-light hover:text-custom-pink px-2">Log in</button>
          <button className="bg-custom-pink text-white px-4 py-1 rounded-sm font-light  transition-border duration-150 ease-in-out hover:bg-pink-700">
            Get Started
          </button>
        </div>

        <div className="md:hidden px-3">
          {isMenuOpen ? (
            <LuX
              className="text-custom-pink"
              size={24}
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <LuMenu
              className="text-custom-pink"
              size={24}
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-white shadow-md py-6 px-12 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <>
                <p key={item.id} className="flex items-center justify-between">
                  {item.title} <FaAngleDown className="text-custom-pink" />
                </p>
                <div className="w-full h-[1px] bg-slate-300 "></div>
              </>
            ))}
            <div className="flex space-x-3">
              <button className="border border-custom-pink text-custom-pink w-28 py-2 rounded-sm font-light">
                Log in
              </button>
              <button className="bg-custom-pink text-white w-28 py-2 px-2 rounded-sm font-light">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
