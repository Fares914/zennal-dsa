import { isBitSet } from "./isBitSet";
import { toggleBit } from "./toggleBit";

export function swapBits(n: number, pos1: number, pos2: number): number {
  if (pos1 < 0 || pos1 > 31 || pos2 < 0 || pos2 > 31) {
    throw new Error("Positions must be between 0 and 31");
  }
  const bit1 = isBitSet(n, pos1);
  const bit2 = isBitSet(n, pos2);
  if (bit1 !== bit2) {
    n = toggleBit(n, pos1);
    n = toggleBit(n, pos2);
  }
  return n;
}
