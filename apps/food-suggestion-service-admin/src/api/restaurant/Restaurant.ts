import { JsonValue } from "type-fest";

export type Restaurant = {
  address: string | null;
  createdAt: Date;
  id: string;
  photos: JsonValue;
  rating: number | null;
  updatedAt: Date;
};
