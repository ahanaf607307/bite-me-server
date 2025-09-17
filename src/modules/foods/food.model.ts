import { model, Schema } from "mongoose";
import { FoodReview, IFood } from "./food.interface";

const foodReviewSchema = new Schema<FoodReview>({
  reviewerName: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: String, required: true },
  reviewerImage: { type: String, required: true },
});

const foodSchema = new Schema<IFood>(
  {
    foodName: { type: String, required: true },
    foodTitle: { type: String, required: true },
    foodCategory: { type: String, required: true },
    foodBrand: { type: String, required: true },
    foodReview: { type: [foodReviewSchema], default: [] },
    foodDesc: { type: String, required: true },
    foodImage: { type: String, required: true },
    foodPrice: { type: Number, required: true },
    foodRating: { type: String, required: true },
    foodStatus: { type: String, enum: ["popular", "dailySell"] },
    discountPrice: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Food = model<IFood>("food", foodSchema);
