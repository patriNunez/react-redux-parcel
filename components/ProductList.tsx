import { useState } from "react";
import React from "react";
import { AddToCartButton } from "./ShoppingCart/CartButton";

const ProductList = () => {
  //const [isLoading, setIsLoading] = useState(true);
  //const dispatch = useDispatch();
  const [products, setProdcuts] = useState(fetchProducts);

  function fetchProducts() {
    return [
      {
        id: 0,
        name: "Destornillador",
        price: 12,
      },
      {
        id: 1,
        name: "Martillo",
        price: 15,
      },
      {
        id: 2,
        name: "Desafil",
        price: 1.2,
      },
    ];
  }

  /*  if (isLoading) {
      return <div>Loading...</div>;
    } */

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}
          <AddToCartButton product={product}></AddToCartButton>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
