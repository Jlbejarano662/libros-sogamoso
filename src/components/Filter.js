import React, { useState } from "react";

const Filter = ({ products, setLeakedData }) => {

  // category selected
  const [category, setCategory] = useState({
    Ficcion: false,
    RomanceYDrama: false,
    AutoayudaYFinanzasPersonales: false,
    infantiles: false,
  });



  //event filter
  const handleOnChecked = (e) => {
    setCategory({
      ...category,
      [e.target.value]: e.target.checked,
    });

    if (e.target.checked || e.target.id === "categories") {
      const resultCategory = products.filter(
        (item) => item.category === e.target.value
      );

      setLeakedData([...resultCategory]);
    } else {
      const resultCategory = products;
      setLeakedData([...resultCategory]);
    }
  };

  //HTML
  return (<>
    <section className="md:w-[50%] flex justify-center my-8 lg:hidden items-center">
      <select
        onChange={handleOnChecked}
        id="categories"
        className=" appearance-none block  border border-[#e4e4e4]  rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
      >
        <option>
          Categorías
        </option>
        <option value="Ficcion">Ficción</option>
        <option value="RomanceYDrama">Romance y drama</option>
        <option value="AutoayudaYFinanzasPersonales">
          Autoayuda y Finanzas personales
        </option>
        <option value="Infantiles">Infantiles</option>
      </select>
    </section>
    <section className="mr-2 hidden lg:block">
      {/* Categories */}
      <h2 className="font-extrabold text-xl text-tertiary text-left mb-4 ">
        Categorías
      </h2>
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
