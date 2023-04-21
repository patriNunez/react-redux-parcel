import React from "react";
import Cart from "./ShoppingCart/Cart";
import ProductList from "./ProductList";

function App() {
  return (
    <>
      <h1>Shopping Cart with Redux</h1>
      <section>
        <ProductList></ProductList>
      </section>
      <section>
        <Cart></Cart>
      </section>
    </>
  );
}

export default App;
