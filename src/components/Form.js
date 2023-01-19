import React from "react";

//receives as prop the handlebuy event
const Form = ({ handleBuy }) => {
  //HTML
  return (
    <form className="w-full mx-auto">
      <span className="text-[#dc3545]"> * Campo requerido </span>
      <div className="flex flex-wrap -mx-3 mb-6 mt-4">
        {/*input for first name */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block  text-secondary text-lg mb-2"
            htmlFor="firstName"
          >
            Nombres <span className="text-[#dc3545]"> * </span>:
          </label>
          <input
            className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            id="firstName"
            type="text"
            onChange={handleBuy}
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        {/*input for last name */}
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block  text-secondary text-lg mb-2"
            htmlFor="lastName"
          >
            Apellidos <span className="text-[#dc3545]"> * </span>:
          </label>
          <input
            className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            id="lastName"
            type="text"
            onChange={handleBuy}
          />
        </div>
      </div>
      {/*input for address */}
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block  text-secondary text-lg mb-2"
            htmlFor="address"
          >
            Dirección <span className="text-[#dc3545]"> * </span>:
          </label>
          <input
            className="appearance-none block w-full  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            id="address"
            type="text"
            onChange={handleBuy}
          />
        </div>
      </div>
      {/*input for comments */}
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
  );
};

export default Form;
