import { kmpSearch } from "./kmpSearch";

export function isRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }
  const combined = s1 + s1;
  return kmpSearch(combined, s2).length > 0;
}
