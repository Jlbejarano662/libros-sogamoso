import React, { useState } from "react";

/* receives as parameter the handleOnChecked method that filters 
the information each time a radio button (desktop) or 
option (desktop) changes its status. */
const Filter = ({ handleOnChecked }) => {
  //HTML
  return (<>
    <section className="md:w-[50%] flex justify-center my-8 lg:hidden items-center">
      {/* Tablet and Mobile Filter*/}
      <select
        onChange={handleOnChecked}
        id="categories"
        className=" appearance-none block  border border-[#e4e4e4]  rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
      >
        <option>
          Todas las Categorías
        </option>
        <option value="Ficcion">Ficción</option>
        <option value="RomanceYDrama">Romance y drama</option>
        <option value="AutoayudaYFinanzasPersonales">
          Autoayuda y Finanzas personales
        </option>
        <option value="Infantiles">Infantiles</option>
      </select>
    </section>
    {/* Desktop Filter*/}
    <section className="mr-2 max-w-[25%] hidden lg:block">
      {/* Categories */}
      <h2 className="font-extrabold text-xl text-tertiary text-left mb-4 ">
        Categorías
      </h2>
      {/* alls categories */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="radio"
          name="categories"
          defaultChecked
        />
        <label>
          Todas
        </label>
      </div>
      {/* Ficción */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="radio"
          name="categories"
          value="Ficcion"
          id="Ficcion"
        />
        <label htmlFor="Ficcion">Ficción</label>
      </div>
      {/* Romance y drama */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="radio"
          name="categories"
          value="RomanceYDrama"
          id="RomanceYDrama"
        />
        <label htmlFor="RomanceYDrama">Romance y drama</label>
      </div>
      {/* Autoayuda y Finanzas personales */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="radio"
          name="categories"
          value="AutoayudaYFinanzasPersonales"
          id="AutoayudaYFinanzasPersonales"
        />
        <label htmlFor="AutoayudaYFinanzasPersonales">
          Autoayuda y Finanzas personales
        </label>
      </div>
      {/* Infantiles */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="radio"
          name="categories"
          value="Infantiles"
          id="Infantiles"
        />
        <label htmlFor="Infantiles">Infantiles</label>
      </div>
    </section>
  </>
  );
};

export default Filter;
