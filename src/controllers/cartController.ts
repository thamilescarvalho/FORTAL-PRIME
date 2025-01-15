import { Request, Response } from 'express';
import { Cart, CartItem, carts } from '../models/cartModel';
import { products } from '../models/productModel';

export const getCart = (req: Request, res: Response) => {
  const cart = carts.find(c => c.id === parseInt(req.params.id));
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).json({ message: 'Cart not found' });
  }
};

export const addItemToCart = (req: Request, res: Response) => {
  const cart = carts.find(c => c.id === parseInt(req.params.id));
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const product = products.find(p => p.id === req.body.productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const itemIndex = cart.items.findIndex(item => item.product.id === product.id);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += req.body.quantity;
  } else {
    const newItem: CartItem = {
      product,
      quantity: req.body.quantity,
    };
    cart.items.push(newItem);
  }
  res.json(cart);
};

export const removeItemFromCart = (req: Request, res: Response) => {
  const cart = carts.find(c => c.id === parseInt(req.params.id));
  if (!cart) {
    return res.status(404).json({ message: 'Cart not found' });
  }

  const itemIndex = cart.items.findIndex(item => item.product.id === req.body.productId);
  if (itemIndex > -1) {
    cart.items.splice(itemIndex, 1);
    res.json(cart);
  } else {
    res.status(404).json({ message: 'Item not found in cart' });
  }
};

export const clearCart = (req: Request, res: Response) => {
  const cart = carts.find(c => c.id === parseInt(req.params.id));
  if (cart) {
    cart.items = [];
    res.json(cart);
  } else {
    res.status(404).json({ message: 'Cart not found' });
  }
};