import { Product } from "../models/Product.model";

  export interface State {
    productsCart: Product[];
    totalItems: number;
  }
  
  export const initialState: State = {
    productsCart: [],
    totalItems: 0,
  };