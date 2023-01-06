import React, { useContext, useState } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import styles
import "./ProductDetails.css"

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();

  // data products
  const { products } = useContext(ProductContext);
  // cart
  const { addToCart } = useContext(CartContext);
  
  // tabs
  const [toggleState, setToggleState] = useState(1);
  // tabs
  const toggleTab = (index) => {
    setToggleState(index);
  };

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Cargando...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image, ISBN, author } = product;

  

  return (
    <section className="mt-14 lg:mt-8 min-h-[65vh] flex items-center">
      <div className="container mx-auto lg:py-8">
        {/* Author, title, ISB, price*/}
        <div className="text-left mt-8 lg:mt-0">
          <p className="uppercase text-xs lg:text-sm">{author}</p>
          <p className="text-xs lg:text-sm">{ISBN}</p>
          <h1 className="font-extrabold text-3xl lg:text-4xl">{title}</h1>
          <p className="font-bold text-2xl lg:text-3xl">
            $ {Intl.NumberFormat("es-ES").format(price)}
          </p>
        </div>
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* image */}
          <div className="flex w-full md:w-auto justify-center items-center my-8 lg:mb-0">
            <img
              className="max-w-[100%] lg:max-w-sm"
              src={image}
              alt={title}
            ></img>
          </div>
          {/* text */}
          <div className="lg:mx-8 flex flex-col ">
            {/* Description */}
            <div className="">
              <div className=" flex my-4 lg:my-0">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Reseña
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Detalles del Envío
                </button>
              </div>

              <div className=" ">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <p>{description}</p>
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                  <p>
                    Se realizan envíos a toda Colombia, la entrega puede varíar
                    de 3 - 10 días hábiles.
                    Los plazos de entrega pueden verse afectados por
                    circunstancias eventuales de nuestros transportistas y
                    ajenas a Libros Sogamoso.
                  </p>
                </div>
              </div>
            </div>
            {/* add to cart */}
            <div className="flex justify-center">
            <button
              className="bg-[#FBD111] text-[#403E41] px-4 py-2 rounded-sm  text-xl mt-4 mb-8 lg:mb-0"
              onClick={() => addToCart(product, product.id)}
            >
              Añadir al Carrito
            </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
