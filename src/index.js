import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//products provider
import ProductsProvider from "./contexts/ProductContext";
// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// cart provider
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductsProvider>
          <App />
      </ProductsProvider>
    </CartProvider>
  </SidebarProvider>
);
