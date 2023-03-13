import ProductRouter from "./product.routes.js";
import CartRouter from "./cart.routes.js";
import UserRouter from "./user.routes.js";
export const productRouter = new ProductRouter();
export const cartRouter = new CartRouter();
export const userRouter = new UserRouter();