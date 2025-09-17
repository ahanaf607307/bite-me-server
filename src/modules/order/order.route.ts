import { Router } from "express";
import { createOrder, getOrder } from "./order.controller";

const orderRoute = Router();
orderRoute.post("/", createOrder);
orderRoute.get("/", getOrder);

export default orderRoute;
