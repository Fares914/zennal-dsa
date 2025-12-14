import { extendedGcd } from "./extendedGcd";

export function modInverse(a: number, m: number): number {
  const { gcd: g, x } = extendedGcd(a, m);
  if (g !== 1) {
    return -1;
  }
  return ((x % m) + m) % m;
}
