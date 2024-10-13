import { InputJsonValue } from "../../types";

export type RestaurantCreateInput = {
  address?: string | null;
  photos?: InputJsonValue;
  rating?: number | null;
};
