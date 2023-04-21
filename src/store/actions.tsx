import { Product } from "../models/Product.model";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: Product;
}

export type ActionTypes = AddProductAction | FetchProductsAction;