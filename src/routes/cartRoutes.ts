import express from 'express';
import { getCart, addItemToCart, removeItemFromCart, clearCart } from '../controllers/cartController';

const router = express.Router();

router.get('/carts/:id', getCart);
router.post('/carts/:id/items', addItemToCart);
router.delete('/carts/:id/items', removeItemFromCart);
router.delete('/carts/:id', clearCart);

export default router;