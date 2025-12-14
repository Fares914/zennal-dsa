import { intSqrt } from "./intSqrt";

export function isPerfectSquare(n: number): boolean {
  if (n < 0) return false;
  const root = intSqrt(n);
  return root * root === n;
}
