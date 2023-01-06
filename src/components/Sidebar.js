import React, { useContext } from "react";
// import link
import { Link, link } from "react-router-dom";
// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../components/CartItem";
// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  // get sidebar context --> sidebar open/closed
  const { isOpen, handleClose } = useContext(SidebarContext);
  // get methods and constants from cartContext
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  //HTML
  return (
    <>
      {/* show sidebar when isOpen is true*/}
      <div
        className={`${isOpen ? "right-0" : "-right-full"
          } w-full bg-white fixed top-0 h-full shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="uppercase text-sm font-semibold">
            {/* number of products in the cart */}
            Carrito de Compras ({itemAmount})
          </div>
          {/* arrow forward icon. Hidden sidebar event on click */}
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        {/* maps the items within the cart and displays them using the cartItem component */}
        <div className="h-[60vh] xl:h-[70vh] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-[#403e4140]">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div>
          <div className="flex w-full justify-between items-center py-4">
            {/* total to be pay */}
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span> ${" "}
              {Intl.NumberFormat("es-ES").format(total)}
            </div>
            {/* removes all items from the cart on click */}
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-primary text-white w-10 h-10 flex justify-center items-center text-lg"
            >
              {/* clear cart icon */}
              <FiTrash2 />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center my-4">
          {/* link to Purchase Order */}
          <Link to={"/purchaseOrder"}>
            {/* sidebar close event on click */}
            <button
              onClick={handleClose}
              className="bg-primary text-secondary px-4 py-2 rounded-sm font-semibold w-48">
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
