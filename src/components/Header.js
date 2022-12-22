import React, { useContext } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// sidebar icons
import { BsBag } from "react-icons/bs";
// cart context
import { CartContext } from "../contexts/CartContext";
//imprt link
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-[#FBD111] text-[#403E41] fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between h-12">
        {/* Name */}
        <Link to={"/"}>
          <div>LIBROSSOGAMOSO</div>
        </Link>
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <div className="mx-4">Inicio</div>
          </Link>
          <Link to={"/categories"}>
            <div className="mx-4">Categorias</div>
          </Link>

          {/* Cart */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative mx-4"
          >
            <BsBag className="text-2xl" />
            <div className="bg-[#403E41] text-white absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
