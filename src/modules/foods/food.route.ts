import { Router } from "express";
import {
  createFood,
  deleteFoodById,
  getFood,
  getFoodById,
  updateMangoById,
} from "./food.controller";

const foodRoute = Router();
foodRoute.post("/", createFood);
foodRoute.get("/:foodId", getFoodById);
foodRoute.patch("/:foodId", updateMangoById);
foodRoute.delete("/:foodId", deleteFoodById);
foodRoute.get("/", getFood);

export default foodRoute;
