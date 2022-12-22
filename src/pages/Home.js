import React, { useContext } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from '../components/Product';

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  //CAMBIAR POR LAS CATEGORÍAS QUE TENGO
  //get only men´s & women's clothing category
  /* const filteredProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" || item.category === "men's clothing"
    );
  }); */
  //console.log(filteredProducts);
  return (
    <div>
      <section className="py-16">
        Home
      </section>
    </div>
  );
};

export default Home;
