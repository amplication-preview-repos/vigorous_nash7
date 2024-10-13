import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  cuisinePreferences?: Array<"Option1">;
  dietaryRestrictions?: Array<"Option1">;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  locationRadius?: number | null;
  password?: string;
  priceRange?: "Option1" | null;
  roles?: InputJsonValue;
  username?: string;
};
