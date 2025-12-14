export function stirling(n: number): number {
  if (n < 0) {
    throw new Error("n must be non-negative");
  }
  if (n === 0 || n === 1) return 1;
  const pi = Math.PI;
  const e = Math.E;
  return Math.sqrt(2 * pi * n) * Math.pow(n / e, n);
}
