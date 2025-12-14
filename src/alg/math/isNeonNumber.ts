import { digitSum } from "./digitSum";

export function isNeonNumber(n: number): boolean {
  const square = n * n;
  return digitSum(square) === n;
}
