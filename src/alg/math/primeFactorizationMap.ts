import { primeFactorization } from "./primeFactorization";

export function primeFactorizationMap(n: number): Map<number, number> {
  const factors = new Map<number, number>();
  const primeFactors = primeFactorization(n);
  for (const factor of primeFactors) {
    factors.set(factor, (factors.get(factor) ?? 0) + 1);
  }
  return factors;
}
