import { Request, Response } from "express";
import { Order } from "./order.model";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = await Order.create(req.body);
    res.send({
      status: true,
      message: "Order submit complete",
      data: orderData,
    });
  } catch (error) {
    res.send({
      message: "Order Placement error",
      error,
    });
  }
};
export const getOrder = async (req: Request, res: Response) => {
  const orderData = await Order.find().populate("user").populate("food");
  try {
    res.send({
      status: true,
      message: "Order getting successfully",
      data: orderData,
    });
  } catch (error) {
    res.send({
      message: "Order getting failed ",
      error,
    });
  }
};
