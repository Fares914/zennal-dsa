import { kmpSearch } from "./kmpSearch";

export function countOccurrences(text: string, pattern: string): number {
  return kmpSearch(text, pattern).length;
}
