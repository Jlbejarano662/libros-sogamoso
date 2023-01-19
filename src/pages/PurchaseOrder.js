import React, { useContext, useState, useEffect } from "react";
//import
import { CartContext } from "../contexts/CartContext";

//import link
import { Link } from "react-router-dom";

import ReactWhatsapp from "react-whatsapp";
import Form from "../components/Form";

import Tooltip from "../components/Tooltip";

import emptyCart from "../img/empty_cart.png";

const PurchaseOrder = () => {
  // Data cart
  const { cart, itemAmount, total } = useContext(CartContext);

  const [disabled, setDisabled] = useState(true);

  // contains the information entered in the form
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    comments: "",
  });
  //updates the form information when any input changes
  const handleBuy = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (form.firstName !== "" && form.lastName !== "" && form.address !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);

  // HTML
  return (
    <>
      <section
        className={
          itemAmount === 0
            ? "container mt-14 py-16 min-h-[90vh] mx-auto flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <img
          src={emptyCart}
          className="max-w-[40%] md:max-w-[20%] lg:max-w-[10%]"
          alt="Carrito vacío"
        ></img>
        <h1 className="text-5xl text-center lg:text-7xl font-extrabold text-secondary my-8">
          ¡Tu carro está vacío¡
        </h1>
        <p className="text-center text-xl">
          ¿Aún no te has decidido? Tenemos productos que te encantarán, revisa
          el menú de arriba o ve a la página de la tienda para comprobarlo.{" "}
        </p>
        <Link to={"/categories"}>
          <button className="mt-5">
            <span className="relative block px-8 py-3 bg-primary text-secondary text-lg rounded font-bold">
              Volver a la tienda
            </span>
          </button>
        </Link>
      </section>

      <div className={itemAmount === 0 ? "hidden" : "container py-16 mx-auto"}>
        <h1 className="w-full text-center font-extrabold text-4xl text-tertiary my-8">
          Orden de Compra
        </h1>
        <div className=" flex flex-col items-center relative lg:flex-row lg:justify-between lg:items-start">
          {/* summary shopping cart*/}
          <section className=" py-2 w-full lg:w-[50%] lg:px-8 font-light text-[#403E41]">
            <p className="w-full font-extrabold text-2xl text-tertiary text-left mb-4">
              Resumen de Compra ({itemAmount})
            </p>
            {/* map the products in the shopping cart */}
            {cart.map((item) => {
              // destructure item
              const { id, title, image, price, amount } = item;

              return (
                <div
                  className="w-full lg:px-6 min-h-[150px] flex border-b items-center gap-x-4"
                  item={item}
                  key={item.id}
                >
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
                          {"$ " +
                            Intl.NumberFormat("es-ES").format(price * amount)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* total */}
            <div className="uppercase font-extrabold text-base text-secondary py-4">
              <span className="mr-2">Total:</span> ${" "}
              {Intl.NumberFormat("es-ES").format(total)}
            </div>
          </section>
          <div className="absolute left-1/2 -ml-0.5 w-[1px] h-full bg-[#e4e4e4] hidden lg:block"></div>
          {/* Form */}
          <section className="w-full lg:w-[50%] lg:px-8 flex flex-col items-center justify-center py-2 ">
            <p className="w-full font-extrabold text-2xl text-tertiary text-left mb-4">
              Datos de Envío
            </p>
            {/* Render form component*/}
            <Form handleBuy={handleBuy}></Form>
            {/* terms and conditions */}
            <p>* Serás redireccionado a WhatsApp para terminar tu compra.</p>
            {/* buy button */}
            <div className="w-full flex justify-center my-4">
              {/* send whatsapp message with purchase summary and shipping information */}
              {/* organize the message so that the products are displayed with line breaks and the price in COP format */}
              <Tooltip
                key={"tooltip"}
                title={
                  disabled
                    ? "Uno o más campos tienen un error. Por Favor, revisa e inténtalo de nuevo."
                    : "Enviar orden de compra."
                }
              >
                <ReactWhatsapp
                  disabled={disabled}
                  className="bg-primary text-secondary px-4 py-2 rounded-sm font-semibold w-48 disabled:bg-[#403e4179] disabled:text-white"
                  number="57-324-223-6489"
                  message={`¡Hola! Estoy interesad@ en realizar el siguiente pedido: \n \n *Resumen de Compra:*\n${cart
                    .map(
                      (product) =>
                        " - Título: " +
                        product.title +
                        ", cantidad: " +
                        product.amount +
                        ", subtotal: " +
                        Intl.NumberFormat("es-ES").format(
                          product.price * product.amount
                        )
                    )
                    .join("\n")} \n Total: $${Intl.NumberFormat("es-ES").format(
                    total
                  )} COP \n \n *Datos de Envío:* \n - Nombre: ${
                    form.firstName
                  } ${form.lastName} \n - Dirección: ${
                    form.address
                  }\n - Comentarios: ${form.comments}`}
                >
                  Comprar
                </ReactWhatsapp>
              </Tooltip>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default PurchaseOrder;
