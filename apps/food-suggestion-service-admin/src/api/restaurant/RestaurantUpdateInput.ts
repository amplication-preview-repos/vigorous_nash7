import { InputJsonValue } from "../../types";

export type RestaurantUpdateInput = {
  address?: string | null;
  photos?: InputJsonValue;
  rating?: number | null;
};
