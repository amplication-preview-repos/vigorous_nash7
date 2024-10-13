import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "address";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.address?.toString() || String(record.id);
};
