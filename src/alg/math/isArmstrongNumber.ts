import { power } from "./power";

export function isArmstrongNumber(n: number): boolean {
  if (n < 0) return false;
  const digits = n.toString().split("").map(Number);
  const length = digits.length;
  const sum = digits.reduce((acc, digit) => acc + power(digit, length), 0);
  return sum === n;
}
