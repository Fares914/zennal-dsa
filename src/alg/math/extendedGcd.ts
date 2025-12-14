export function extendedGcd(
  a: number,
  b: number,
): { gcd: number; x: number; y: number } {
  if (b === 0) {
    return { gcd: a, x: 1, y: 0 };
  }
  const result = extendedGcd(b, a % b);
  const x = result.y;
  const y = result.x - Math.floor(a / b) * result.y;
  return { gcd: result.gcd, x, y };
}
