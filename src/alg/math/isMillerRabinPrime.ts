import { modPow } from "./modPow";

export function isMillerRabinPrime(n: number, k: number = 5): boolean {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  let d = n - 1;
  let r = 0;
  while (d % 2 === 0) {
    d /= 2;
    r++;
  }

  for (let i = 0; i < k; i++) {
    const a = 2 + Math.floor(Math.random() * (n - 4));
    let x = modPow(a, d, n);
    if (x === 1 || x === n - 1) continue;
    let continueWitness = false;
    for (let j = 0; j < r - 1; j++) {
      x = (x * x) % n;
      if (x === n - 1) {
        continueWitness = true;
        break;
      }
    }
    if (!continueWitness) return false;
  }
  return true;
}
