import UserRepository from "./user.repository.js";
import UserDao from "../dao/user.dao.js";
export const UserService = new UserRepository(new UserDao());

import ProductRepository from "./product.repository.js";
import ProductDao from "../dao/product.dao.js";
export const ProductService = new ProductRepository(new ProductDao());

import CartRepository from "./cart.repository.js";
import CartDao from "../dao/cart.dao.js";
export const CartService = new CartRepository(new CartDao());

import TicketRepository from "./ticket.repository.js";
import TicketDao from "../dao/ticket.dao.js";
export const TicketService = new TicketRepository(new TicketDao());