import { Types } from "mongoose";

export interface IOrder {
  user: Types.ObjectId;
  food: Types.ObjectId;
  totalPrice: number;
  quantity: number;
  status: string;
  address: {
    zipCode: string;
    state: string;
    country: string;
    street: string;
  };
}
