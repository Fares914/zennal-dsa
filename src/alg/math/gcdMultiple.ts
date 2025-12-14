import { gcd } from "./gcd";

export function gcdMultiple(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return Math.abs(numbers[0]);
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = gcd(result, numbers[i]);
  }
  return result;
}
