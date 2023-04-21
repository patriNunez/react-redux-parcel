import { useDispatch } from "react-redux";
import { Product } from "../../src/models/Product.model";
import { ADD_PRODUCT } from "../../src/store/actions";
import React from "react";

interface Props {
    product: Product;
  }
  
  export const AddToCartButton = (props: Props) => {
    const dispatch = useDispatch();
  
    const handleClick = () => {
      dispatch({ type: ADD_PRODUCT, payload: props.product });
    };
  
    return <button onClick={handleClick}>ADD</button>;
  };