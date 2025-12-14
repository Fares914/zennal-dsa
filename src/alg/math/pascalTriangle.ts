import { combination } from "./combination";

export function pascalTriangle(n: number, k: number): number {
  return combination(n, k);
}
