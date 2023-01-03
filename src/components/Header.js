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

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { itemAmount } = useContext(CartContext);

  const [ open, setOpen ] = useState(true);

  return (
    <header className="bg-[#FBD111] text-[#403E41] fixed w-full z-10 font-bold pb-2 md:pb-0">
      <div className="container mx-auto flex items-center justify-between h-12">
        {/* Name */}
        <Link to={"/"}>
          <div>LIBROSSOGAMOSO</div>
        </Link>
        <div className="flex items-center justify-between">
          {/* menu */}
            <ul className="hidden md:flex items-center">
              <li>
                <Link to={"/"}>
                  <div className="px-4">Inicio</div>
                </Link>
              </li>
              <li className="dropdown">
                <Link to={"/categories"}>
                  <div className="px-4 dropbtn">Categorias</div>
                </Link>
                {/* <div className="dropdown-content">
                    <div>Ficción</div>
                    <div>Infaltil</div>
                    <div>Aventura</div>
                </div> */}
              </li>
            </ul>

          {/* Cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex justify-center items-center relative  cart h-12 w-12"
          >
            <BsBag className="text-2xl" />
            <div className="bg-[#403E41]  text-white icon-cart absolute  right-[0.5rem] bottom-[0.2rem] text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
          {/* button menu*/}
          <BsList className="md:hidden text-3xl" onClick={() => setOpen(!open)} />
        </div>

      </div>
      {/* menu responsive */}
      <ul className={open ? "hidden" : "container block" + " mx-auto py-2 md:hidden" }>
              <li className="h-12">
                <Link to={"/"}>
                  <div className="px-4">Inicio</div>
                </Link>
              </li>
              <li className="h-12 dropdown">
                <Link to={"/categories"}>
                  <div className="px-4 dropbtn">Categorias</div>
                </Link>
                {/* <div className="dropdown-content">
                    <div className="">Ficción</div>
                    <div>Infaltil</div>
                    <div>Aventura</div>
                </div> */}
              </li>
            </ul>
    </header>
  );
};

export default Header;


