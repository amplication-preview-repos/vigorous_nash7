import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  photos?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
