export interface FoodReview {
  reviewerName: string;
  review: string;
  rating: string;
  reviewerImage: string;
}

export interface IFood {
  foodName: string;
  foodTitle: string;
  foodCategory: string;
  foodBrand: string;
  foodReview: FoodReview[];
  foodDesc: string;
  foodImage: string;
  foodPrice: number;
  foodRating: string;
  foodStatus: "popular" | "dailySell";
  discountPrice?: number;
}

// https://i.ibb.co.com/b5WQwZQn/bbq-bacon-burger.png
// https://i.ibb.co.com/4RGJC8q2/buffalo-chicken-wings.png
// https://i.ibb.co.com/Ldtwn2Vv/chocolate-milkshake.png
// https://i.ibb.co.com/9HBm7Cp6/classic-beef-burger.png
// https://i.ibb.co.com/svWbtCsh/crispy-fried-chicken.png
// https://i.ibb.co.com/SDbZhBZ7/grilled-chicken-sandwich.png
