import React, {createContext, useState, useEffect} from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  // products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      //CAMBIAR RUTA POR EL JSON DE MI PÁGINA
      const response = await fetch('data/data.json');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  },[])

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
