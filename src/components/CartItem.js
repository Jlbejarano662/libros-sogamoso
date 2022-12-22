import React, { useContext } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
//import cart context
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);

  // destructure item
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b  w-full font-light text-[#403E41]">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={"/product/" + id}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full justify-between mb-2">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={"/product/" + id}
              className="text-sm font-semibold max-w-[240px] text-[#403E41] hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-[#403E41] transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full font-medium">
              {/* minus icon */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 h-4 flex justify-center items-center cursor-pointer bg-[#403E41] text-white">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-4 text-[#403E41]">
                {amount}
              </div>
              {/* plus icon */}
              <div onClick={() => increaseAmount(id)} className="flex-1 h-4 flex justify-center items-center cursor-pointer bg-[#FBD111] text-white">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {Intl.NumberFormat("es-ES").format(price)}
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className="flex-1 flex justify-end items-center text-[#403E41] font-bold">
              {"$ " + Intl.NumberFormat("es-ES").format(price * amount)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
