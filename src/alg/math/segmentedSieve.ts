import { sieveOfEratosthenes } from "./sieveOfEratosthenes";
import { isPrime } from "./isPrime";

export function segmentedSieve(low: number, high: number): number[] {
  if (high < 2) return [];

  const limit = Math.ceil(Math.sqrt(high));
  const basePrimes = sieveOfEratosthenes(limit);

  const isComposite = Array(high - low + 1).fill(false);

  for (const prime of basePrimes) {
    const start = Math.max(prime * prime, Math.ceil(low / prime) * prime);
    for (let j = start; j <= high; j += prime) {
      isComposite[j - low] = true;
    }
  }

  const primes: number[] = [];
  for (let i = 0; i <= high - low; i++) {
    const num = i + low;
    if (num < 2) continue;
    if (!isComposite[i] && isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}
