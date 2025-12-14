export function primeFactorization(n: number): number[] {
  if (n < 2) return [];
  const factors: number[] = [];
  let divisor = 2;
  while (divisor * divisor <= n) {
    while (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    }
    divisor++;
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}
