import { Router } from "express";
import foodRoute from "../modules/foods/food.route";
import orderRoute from "../modules/order/order.route";
import userRoute from "../modules/user/user.route";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/food", foodRoute);
routes.use("/order", orderRoute);

export default routes;
