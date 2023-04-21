import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../src/store/store";

function Cart() {
  const productsCart = useSelector((state: RootState) => state.productsCart);
  const totalItems = useSelector((state: RootState) => state.totalItems);
  return (
    <>
      <h1>Elements in the cart ({totalItems}):</h1>
      <ul>
        {productsCart.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Cart;
