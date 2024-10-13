import { SuggestionWhereInput } from "./SuggestionWhereInput";
import { SuggestionOrderByInput } from "./SuggestionOrderByInput";

export type SuggestionFindManyArgs = {
  where?: SuggestionWhereInput;
  orderBy?: Array<SuggestionOrderByInput>;
  skip?: number;
  take?: number;
};
