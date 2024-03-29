import React from 'react';
import {Bars3Icon} from "@heroicons/react/20/solid";

interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-4/5 mx-auto h-full">
        <h1 className="flex-grow-0 cursor-pointer text-2xl text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        <div className="flex gap-x-4">
          <div className="nav-link">HOME</div>
          <div className="nav-link">SERVICES</div>
          <div className="nav-link">ABOUT</div>
          <div className="nav-link">BLOG</div>
          <div className="nav-link">CONTACT</div>
          <div onClick={openNav}>
            <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;