import React, { createContext, useState, useEffect } from 'react';


// create context
export const ProductContext = createContext();



const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  //filter
/*   const filter = (products) => {
    const data2 = products.reduce((categories, item) => categories.set(item.category, item), new Map());
    setCategories(data2)
    console.log(products)
  }; */
  // fetch products
  const fetchProducts = async () => {
    //products
    const response = await fetch('data/data.json');
    const data = await response.json();
    setProducts(data);
    //products categories
    const data2 = data.reduce((categories, item) => categories.set(item.category, item), new Map);
    let data3=[]; 
    let counter = 1;
    for (let value of data2.values()) {
      if(counter <= 6) {
        data3.push(value)
      }
      counter++;
    }
    setCategories([...data3])
    

  };


  // fetch products
  useEffect(() => {
    fetchProducts();
    //filter(products);
  }, [])




  return <ProductContext.Provider value={{ products, setProducts, categories }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
