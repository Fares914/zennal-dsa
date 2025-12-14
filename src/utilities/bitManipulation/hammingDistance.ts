import { countSetBitsFast } from "./countSetBitsFast";

export function hammingDistance(a: number, b: number): number {
  return countSetBitsFast(a ^ b);
}
