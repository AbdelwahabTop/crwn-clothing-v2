import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPE {
  SET_IS_CART_OPEN = "cart/SET_IS_CART_OPEN",
  SET_CART_ITEMS = "cart/SET_CART_ITEMS",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
