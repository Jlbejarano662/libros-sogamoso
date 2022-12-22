import React, { useContext } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from '../components/Product';

const Categories = () => {
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
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product product={product} key={product.id}/>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;