import React, { useContext, useState } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";

const Categories = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // category selected
  const [category, setCategory] = useState({
    Ficcion: false,
    RomanceYDrama: false,
    AutoayudaYFinanzasPersonales: false,
    infantiles: false,
  });

  //data filtering
  const [leakedData, setLeakedData] = useState(products);
  // if products is not found
  if (products.length == 0) {
    return (
      <section className="h-screen flex justify-center items-center">
        Cargando...
      </section>
    );
  }
  //event filter
  const handleOnChecked = (e) => {
    console.log(e.target.value);
    setCategory({
      ...category,
      [e.target.value]: e.target.checked,
    });

    if (e.target.checked || e.target.id == "categories") {
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
  return (
    <div>
      <div className="py-16">
        <h1 className="w-full text-center font-extrabold text-4xl text-tertiary my-8">
          Categorías
        </h1>
        <div className="container mx-auto lg:flex items-start min-h-screen">
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
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {leakedData.length == 0
              ? products.map((product) => {
                  return <Product product={product} key={product.id} />;
                })
              : leakedData.map((product) => {
                  return <Product product={product} key={product.id} />;
                })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Categories;
