import React, { useState } from "react";

const Filter = ({ products }) => {
  // category selected
  const [category, setCategory] = useState({
    ficcion: false,
    romanceDrama: false,
    autoayudaFinanzasPersonales: false,
    infantiles: false,
  });

  //data products
  const [leakedData, setLeakedData] = useState([products]);
  //event
  const handleOnChecked = (e) => {
    if (e.target.value === "all") {
      setCategory({
        products,
      });
    } else {
      setCategory({
        ...category,
        [e.target.value]: e.target.checked,
      });
      const resultCategory = products.filter(
        (item) => category[item.category] == true
      );
      setLeakedData([...resultCategory]);
    }
  };


  //HTML
  return (
    <div className="w-full">
      {/* Categories */}
      <h2 className="font-extrabold text-xl text-tertiary text-left mb-4 ">
        Categorías
      </h2>
      {/* Todas */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="checkbox"
          name="categories"
          value="all"
          id="all"
        />
        <label htmlFor="all">Todas</label>
      </div>
      {/* Ficción */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="checkbox"
          name="categories"
          value="ficcion"
          id="ficcion"
        />
        <label htmlFor="ficcion">Ficción</label>
      </div>
      {/* Romance y drama */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="checkbox"
          name="categories"
          value="romanceDrama"
          id="romanceDrama"
        />
        <label htmlFor="romanceDrama">Romance y drama</label>
      </div>
      {/* Autoayuda y Finanzas personales */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="checkbox"
          name="categories"
          value="autoayudaFinanzasPersonales"
          id="autoayudaFinanzasPersonales"
        />
        <label htmlFor="autoayudaFinanzasPersonales">
          Autoayuda y Finanzas personales
        </label>
      </div>
      {/* Infantiles */}
      <div className="text-lg mb-2 flex">
        <input
          onChange={handleOnChecked}
          className="mr-4"
          type="checkbox"
          name="categories"
          value="infantiles"
          id="infantiles"
        />
        <label htmlFor="infantiles">Infantiles</label>
      </div>
    </div>
  );
};

export default Filter;
