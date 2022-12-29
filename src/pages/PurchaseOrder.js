import React from "react";
//import
import Sidebar from "../components/Sidebar";

const PurchaseOrder = () => {
  return (<>
    <section className="container mt-14 lg:mt-8 min-h-[65vh] flex flex-col items-center justify-center mx-auto">
      <h1 className="w-full text-center font-extrabold text-4xl text-tertiary my-8">Orden de Compra</h1>
      <p className="w-full font-extrabold text-xl text-tertiary text-left mb-4">Datos de Envío</p>
      <form className="w-full mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="grid-first-name"
            >
              Nombres:
            </label>
            <input
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
              id="grid-first-name"
              type="text"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="grid-last-name"
            >
              Apellidos:
            </label>
            <input
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
              id="grid-last-name"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="grid-address"
            >
              Dirección
            </label>
            <input
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
              id="grid-address"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block  text-secondary text-lg mb-2"
              htmlFor="grid-comments"
            >
              Comentarios, preguntas y/o requerimientos adicionales:
            </label>
            <textarea
              className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400 h-40"
              id="grid-comments"
            />
            {/* <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p> */}
          </div>
        </div>
      </form>
      <Sidebar/>
    </section>
    
    </>
  );
};

export default PurchaseOrder;
