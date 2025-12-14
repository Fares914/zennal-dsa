export function sieveOfEratosthenes(n: number): number[] {
  if (n < 2) return [];
  const isPrimeFl = Array(n + 1).fill(true);
  isPrimeFl[0] = isPrimeFl[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (isPrimeFl[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrimeFl[j] = false;
      }
    }
  }
  const primes: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (isPrimeFl[i]) {
      primes.push(i);
    }
  }
  return primes;
}
