import React, { createContext, useState, useEffect } from "react";

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // cart state
  const [cart, setCart] = useState([]);

  // function that adds a product to the shopping cart, receives as parameters the product and its id 
  const addToCart = (product, id) => {
    // increase the number of products in the shopping cart
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      // map the cart and search for the item
      const newCart = [...cart].map((item) => {
        // if it finds the item
        if (item.id === id) {
          {/* the number of products is increased */}
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      // update cart information
      setCart(newCart);
    //if cart item is not in the cart
    } else {
      //add new item to cart
      setCart([...cart, newItem]);
    }
  };

  // removes an item from the cart, receives as a parameter the item id
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // removes all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  // increases by one the number of elements of an item, it receives as parameter the id of the item to be increased
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //decrease by one the number of elements of an item, it receives as parameter the id of the item to be decrease
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    // if the item has less than one unit remove it from the cart
    if (cartItem.amount <= 1) {
      removeFromCart(id);
    }
  };

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // update item amount each time change cart state
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //total price state
  const [total, setTotal] = useState(0);

  //update total price each time render component
  useEffect(() => {

    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount * currentItem.price;
    }, 0);
    setTotal(total);

  }, [cart]);

  // return methods and data about cart
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
