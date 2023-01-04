import React, { useContext, useState } from "react";
//import
import { CartContext } from "../contexts/CartContext";

//import link
import { Link } from "react-router-dom";

const PurchaseOrder = () => {
  // Data cart
  const { cart, itemAmount, total } = useContext(CartContext)
  // Form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    comments: "",
    cart: cart,
    total: total,
  });

  const handleBuy = (e) => {
    setForm ({
      ...form, [e.target.id]: e.target.value,
    })
  };
  console.log(cart + " - " + total );
  /* const [ firstName, setFirstName] = useState("");
  const [ lastName, setLastName] = useState("");
  const [comments, setComments] = useState(""); 
  const [comments, setComments] = useState(""); 
 */
  return (<div className="container mt-14 lg:mt-8 mx-auto">
    {/* Form */}
    <section className=" min-h-[65vh] flex flex-col items-center justify-center">
      <h1 className="w-full text-center font-extrabold text-4xl text-tertiary my-8">Orden de Compra</h1>
      <p className="w-full font-extrabold text-xl text-tertiary text-left mb-4">Datos de Envío</p>
      <form className="w-full mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="firstName"
            >
              Nombres:
            </label>
            <input
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
              id="firstName"
              type="text"
              onChange={handleBuy}
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="lastName"
            >
              Apellidos:
            </label>
            <input
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
              id="lastName"
              type="text"
              onChange={handleBuy}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="address"
            >
              Dirección:
            </label>
            <input
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
              id="address"
              type="text"
              onChange={handleBuy}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="comments"
            >
              Comentarios, preguntas y/o requerimientos adicionales:
            </label>
            <textarea
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400 h-40"
              id="comments"
              onChange={handleBuy}
            />
            {/* <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p> */}
          </div>
        </div>
      </form>

    </section>

    {/* summary shopping cart*/}
    <section className=" gap-x-4 py-2 lg:px-6 w-full font-light text-[#403E41]">
      <p className="w-full font-extrabold text-xl text-tertiary text-left mb-4">Resumen de Compra ({itemAmount})</p>
      {cart.map((item) => {
        // destructure item
        const { id, title, image, price, amount } = item;

        return <div className="w-full min-h-[150px] flex border-b items-center gap-x-4" item={item} key={item.id}>
          {/* image */}
          <Link to={"/product/" + id}>
            <img className="max-w-[80px]" src={image} alt="" />
          </Link>
          {/* title & price & count */}
          <div className="flex justify-between items-end w-full ">
            <div className="flex flex-col justify-start mb-2 w-full">
              {/* title */}
              <Link
                to={"/product/" + id}
                className="text-sm font-semibold max-w-[240px] text-[#403E41] hover:underline"
              >
                {title}
              </Link>
              {/* item price */}
              <div className="">
                $ {Intl.NumberFormat("es-ES").format(price)}
              </div>
              <div className="flex justify-between">
                {/* amount */}
                <div className=" text-[#403E41]">
                  Cantidad: {amount}
                </div>
                {/* final price */}
                <div className="flex-1 flex justify-end items-center text-[#403E41] font-bold text-sm">
                  {/* make the price at 2 decimals */}
                  {"$ " + Intl.NumberFormat("es-ES").format(price * amount)}
                </div>
              </div>
            </div>
          </div>
        </div>

      })}
      {/* total */}
      <div className="uppercase font-extrabold text-xl text-tertiary py-4">
        <span className="mr-2">Total:</span> ${" "}
        {Intl.NumberFormat("es-ES").format(total)}
      </div>

      {/* indications*/}
      <p>*  Serás redireccionado a WhatsApp para terminar tu compra.</p>
      {/* buy button */}
      <div className="w-full flex justify-center my-4">

        <button
          onClick={() => { console.log(form); }}
          className="bg-primary text-secondary px-4 py-2 rounded-sm font-semibold w-48"
        >
          Comprar
        </button>

      </div>
    </section>

  </div>
  );
};

export default PurchaseOrder;
