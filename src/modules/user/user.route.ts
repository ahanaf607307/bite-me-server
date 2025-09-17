import { Router } from "express";
import {
  deleteUser,
  findUser,
  getUser,
  registerUser,
  updateUser,
} from "./user.controller";

const userRoute = Router();

userRoute.post("/", registerUser);
userRoute.get("/:userId", findUser);
userRoute.delete("/:userId", deleteUser);
userRoute.patch("/:userId", updateUser);
userRoute.get("/", getUser);

export default userRoute;
