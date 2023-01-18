import React, { useContext, useState, useEffect } from "react";

// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
import Filter from "../components/Filter";
import PageNotFound from "../components/PageNotFound";
import Pagination from "../components/Pagination";

const Categories = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // category selected
  //this element saves the status of the radio button (desktop) or options (tablets and cell phones) of the filter.
  const [category, setCategory] = useState({
    Ficcion: false,
    RomanceYDrama: false,
    AutoayudaYFinanzasPersonales: false,
    infantiles: false,
  });

  //data filtering & pagination


  const [leakedData, setleakedData] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  //update leakedData each time render component ProductContext
  useEffect(() => {
    setleakedData([...products]);
  }, [products]);

  // if products is not found show a error message
  if (products.length === 0) {
    return (
      <PageNotFound />
    );
  }

  //event filter
  const handleOnChecked = (e) => {
    // update categories
    setCategory({
      ...category,
      [e.target.value]: e.target.checked,
    });

    // if the element that triggered the event is a filter option
    if (e.target.checked || e.target.id === "categories") {
      // filter products 
      const resultCategory = products.filter(
        (item) => item.category === e.target.value
      );
      // update leakedData with the result of filtering the products
      setleakedData([...resultCategory]);
      if (resultCategory.length === 0) {
        setleakedData([...products]);
      } else {
        setleakedData([...resultCategory]);
      }
      setCurrentPage(1);
    }
  };



  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = leakedData.slice(firstPostIndex, lastPostIndex);

  //HTML
  return (
    <>
      <div className="py-16">
        {/* title */}
        <h1 className="w-full text-center font-extrabold text-4xl text-tertiary my-8">
          Categorías
        </h1>

        <div className="container mx-auto lg:flex items-start min-h-screen">
          {/* renders the filter component */}
          <Filter handleOnChecked={handleOnChecked} />
          {/* products */}
          <div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm  mx-auto md:max-w-none md:mx-0">
              {/* si aún no se ha filtrado la información se muestran todos los productos, 
            en caso contrario se muestra los productos filtrados */}
              {currentPosts.map((product) => {
                  {/* Render the product and its features */ }
                  return <Product product={product} key={product.id} />;
                })}
            </section>

            <Pagination
            totalPosts={leakedData.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          </div>

        </div>

      </div>
    </>
  );
};

export default Categories;
