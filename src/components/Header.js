import React, { useContext, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// sidebar icons
import { BsBag } from "react-icons/bs";
// cart context
import { CartContext } from "../contexts/CartContext";
//imprt link
import { Link } from "react-router-dom";
// icons
import { BsList } from "react-icons/bs";
// import styles
import "./Header.css"

const Header = () => {
  // get sidebar context --> sidebar open/closed
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  // get number of products in the cart from cart context
  const { itemAmount } = useContext(CartContext);
  //auxiliary to manage the sidebar status
  const [open, setOpen] = useState(true);

  //HTML
  return (
    <header className="bg-[#FBD111] text-[#403E41] fixed w-full z-10 font-bold pb-2 md:pb-0">
      <div className="container mx-auto flex items-center justify-between h-12">
        {/* Logo */}
        <Link to={"/"}>
          <div>Libros Sogamoso</div>
        </Link>
        <div className="flex items-center justify-between">
          {/* desktop menu*/}
          {/* this is hidden on screens 768px or less */}
          <ul className="hidden md:flex items-center">
            <li>
              {/* Link to Home */}
              <Link to={"/"}>
                <div className="px-4">Inicio</div>
              </Link>
            </li>
            {/* Link to Categories */}
            <li className="dropdown">
              <Link to={"/categories"}>
                <div className="px-4 dropbtn">Categorias</div>
              </Link>
            </li>
          </ul>

          {/* Cart */}
          {/* show/hidden cart event on click */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex justify-center items-center relative  cart h-12 w-12"
          >
            {/* cart icon */}
            <BsBag className="text-2xl" />
            <div className="bg-[#403E41]  text-white icon-cart absolute  right-[0.5rem] bottom-[0.2rem] text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
              {/* number of products in the cart */}
              {itemAmount}
            </div>
          </div>
          {/* menu icon */}
          {/* this is displayed on screens 768px or less */}
          {/* show/hidden responsive menu event on click */}
          <BsList className="md:hidden text-3xl" onClick={() => setOpen(!open)} />
        </div>
      </div>
      
      {/* menu responsive */}
      {/* this is displayed on screens 768px or less */}
      <ul className={open ? "hidden" : "container block" + " mx-auto py-2 md:hidden"}>
        <li className="h-12">
          {/* Link to Home */}
          <Link to={"/"} onClick={() => setOpen(!open)} >
            <div className="px-4">Inicio</div>
          </Link>
        </li>
        <li className="h-12 dropdown">
          {/* Link to Categories */}
          <Link to={"/categories"} onClick={() => setOpen(!open)} >
            <div className="px-4 dropbtn">Categorias</div>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;


