import { countSetBitsFast } from "./countSetBitsFast";

export function hasKSetBits(n: number, k: number): boolean {
  if (n < 0 || k < 0) return false;
  return countSetBitsFast(n) === k;
}
