import { Product } from './productModel';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
}

export const carts: Cart[] = [];