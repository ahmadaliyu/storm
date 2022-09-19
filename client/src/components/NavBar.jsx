import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../images/logo.png";

const NavBarItem = ({ tittle, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{tittle}</li>;
};

const NavBar = () => {
  const listItems = ["Market", "Exchange", "Tutorials", "Wallets"];
  return (
    <nav className="w-full flex md:justify-center justify-between items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none justify-between items-center flex-initial">
        {listItems.map(({ item, index }) => (
          <NavBarItem key={item + index} tittle={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
