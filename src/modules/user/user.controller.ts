import { Request, Response } from "express";
import { User } from "./user.model";

export const registerUser = async (req: Request, res: Response) => {
  try {
    //old way ----------
    // const payload = req.body;
    // const user = new User(payload);
    // const data = await user.save();
    // new way ---------------
    const userData = await User.create(req.body);
    res.send({
      success: true,
      message: "User Registered Successfully",
      // data, // old way
      data: userData, // new way
    });
  } catch (error) {
    res.send({
      success: false,
      message: { "User Registered failed": error },
    });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const data = await User.find();
    res.send({
      success: true,
      message: "User retrieve Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: { "User retrieve failed": error },
    });
  }
};
export const findUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const data = await User.findById(userId);
    res.send({
      success: true,
      message: "Find User retrieve Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: { "Find User retrieve  failed": error },
    });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const data = await User.findByIdAndDelete(userId);
    res.send({
      success: true,
      message: "User Deleted Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: { "User Deleted failed": error },
    });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  try {
    const data = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    res.send({
      success: true,
      message: "User updated Successfully",
      data,
    });
  } catch (error) {
    res.send({
      success: false,
      message: { "User update failed": error },
    });
  }
};
