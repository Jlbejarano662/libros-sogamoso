import React, { useContext } from "react";
//import link
import { Link} from "react-router-dom";
//import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
//import cart context
import { CartContext } from "../contexts/CartContext";

//receives a product as prop
const Product = ({ product }) => {
  //get addToCart method from CartContext
  const { addToCart } = useContext(CartContext);

  // destructure product
  const { id, image, title, author, price } = product;

  //HTML
  return (
    <div className="lg:w-[250px] xl:w-[280px] lg:mx-auto">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* product image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          {/*buttons*/}
          <div className="absolute top-6 right-5 lg:-right-11 lg:group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300">
            {/* add a product to the cart event on click */}
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-[#FBD111]">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            {/* Link to product detail */}
            <Link
              to={"/product/" + id}
              className="w-12 h-12 bg-[#403E41] flex justify-center items-center text-white drop-shadow-xl"
            >
              <BsEyeFill className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* autor */}
      <div className="text-xs uppercase text-[#403E41]">{author}</div>
      {/* Link to product detail */}
      <Link to={"/product/" + id}>
        {/* title */}
        <h2 className="font-semibold mb-1 text-[#403E41]">{title}</h2>
      </Link>
      {/* price */}
      {/* make the price at COP format */}
      <div className=" text-[#403E41]">
        $ {Intl.NumberFormat("es-ES").format(price)}
      </div>
    </div>
  );
};

export default Product;
