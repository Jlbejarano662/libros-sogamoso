import React, { useContext } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from '../components/Product';

const Categories = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // if products is not found
  if (products.length == 0) {
    return (
      <section className="h-screen flex justify-center items-center">
        Cargando...
      </section>
    );
  }

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