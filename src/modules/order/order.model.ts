import { model, Schema } from "mongoose";
import { Food } from "../foods/food.model";
import { IOrder } from "./order.interface";

const addressSchema = new Schema({
  zipCode: String,
  state: String,
  country: String,
  street: String,
});

const orderSchema = new Schema<IOrder>(
  {
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    food: { type: Schema.Types.ObjectId, ref: "food", required: true },
    totalPrice: { type: Number },
    quantity: { type: Number, min: 0, required: true },
    status: { type: String },
    address: { type: addressSchema, required: true }, // here we use nested schema ...
  },
  {
    timestamps: true,
  }
);

orderSchema.pre("save", async function (next) {
  try {
    if (!this.food) {
      return next(new Error("No food item provided"));
    }

    const foodItem = await Food.findById(this.food);

    if (!foodItem) {
      return next(new Error("Food item not found"));
    }

    if (!this.quantity) {
      return next(new Error("Quantity not provided"));
    }

    // Now TypeScript knows foodItem is not null
    this.totalPrice = foodItem.foodPrice * this.quantity;

    next();
  } catch (error) {
    next();
    console.log(error);
  }
});

export const Order = model<IOrder>("order", orderSchema);
