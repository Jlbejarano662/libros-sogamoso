import React, { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  // categories state
  const [categories, setCategories] = useState([]);

  // fetch products
  const fetchProducts = async () => {
    //get products from data.json
    const response = await fetch('data/data.json');
    const data = await response.json();
    setProducts(data);

    // maps the products and extracts a single product for each category, saves the result in a categories
    const categoriesMap = data.reduce((categories, item) => categories.set(item.category, item), new Map);
    setCategories([...categoriesMap.values()])
  };

  // fetch products each time the component is rendered
  useEffect(() => {
    fetchProducts();
  }, [])

  // return methods and data about products
  return (
  <ProductContext.Provider
    value={{ products, setProducts, categories }}>
    {children}
  </ProductContext.Provider>
  );
};

export default ProductProvider;
