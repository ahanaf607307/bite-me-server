import { Request, Response } from "express";
import { Food } from "./food.model";

export const createFood = async (req: Request, res: Response) => {
  try {
    const createFoodPost = await Food.create(req.body);
    res.send({
      success: true,
      message: "Food added Successfully",
      data: createFoodPost,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Food added failed",
      error: { error },
    });
  }
};
export const getFood = async (req: Request, res: Response) => {
  try {
    const data = await Food.find();
    res.send({
      success: true,
      message: "Food retrieve Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Food retrieve failed",
      error: { error },
    });
  }
};
export const getFoodById = async (req: Request, res: Response) => {
  try {
    const foodId = req.params.foodId;
    const data = await Food.findById(foodId);
    res.send({
      success: true,
      message: "Get Food by id Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Get Food by id failed",
      error: { error },
    });
  }
};

export const updateMangoById = async (req: Request, res: Response) => {
  try {
    const foodId = await req.params.foodId;
    const data = await Food.findByIdAndUpdate(foodId, req.body, {
      new: true,
      runValidators: true,
    });
    res.send({
      success: true,
      message: "Food Updated Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Food Updated Failed",
      error: { error },
    });
  }
};

export const deleteFoodById = async (req: Request, res: Response) => {
  try {
    const foodId = await req.params.foodId;
    const data = await Food.findByIdAndDelete(foodId);
    res.send({
      success: true,
      message: "Food deletion Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Food deletion failed",
      error: { error },
    });
  }
};
