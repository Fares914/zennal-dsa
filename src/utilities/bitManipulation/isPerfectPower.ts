export function isPerfectPower(n: number): boolean {
  if (n <= 1) return n === 1;

  for (let exp = 2; exp <= 30; exp++) {
    const base = Math.round(Math.pow(n, 1 / exp));

    for (let b = Math.max(1, base - 1); b <= base + 1; b++) {
      let power = 1;
      for (let i = 0; i < exp; i++) {
        power *= b;
        if (power > n) break;
      }
      if (power === n) return true;
    }
  }
  return false;
}
