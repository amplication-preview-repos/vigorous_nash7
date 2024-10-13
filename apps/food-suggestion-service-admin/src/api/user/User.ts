import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  cuisinePreferences?: Array<"Option1">;
  dietaryRestrictions?: Array<"Option1">;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  locationRadius: number | null;
  priceRange?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
