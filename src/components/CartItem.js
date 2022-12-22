import React, { useContext } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
//import cart context
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

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
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-[#403E41] font-medium">
              {/* minus icon */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className="flex-1 flex justify-end items-center text-[#403E41] font-bold">
              {"$ " + parseFloat(price * amount).toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
