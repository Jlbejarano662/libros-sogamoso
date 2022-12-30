import React, {createContext, useState, useEffect} from 'react';


// create context
export const ProductContext = createContext();



const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  const fetchProducts = async () => {
    const response = await fetch('data/data.json');
    const data = await response.json();
    setProducts(data);
  };

  // fetch products
  useEffect(() => {
    fetchProducts();
  },[])

  return <ProductContext.Provider value={{products, setProducts}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
