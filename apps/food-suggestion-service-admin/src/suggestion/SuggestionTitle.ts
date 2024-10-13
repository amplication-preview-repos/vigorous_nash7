import { Suggestion as TSuggestion } from "../api/suggestion/Suggestion";

export const SUGGESTION_TITLE_FIELD = "id";

export const SuggestionTitle = (record: TSuggestion): string => {
  return record.id?.toString() || String(record.id);
};
