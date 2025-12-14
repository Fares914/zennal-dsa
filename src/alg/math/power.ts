export function power(base: number, exp: number): number {
  if (exp < 0) {
    throw new Error("Exponent must be non-negative");
  }
  let result = 1;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result *= base;
    }
    exp = Math.floor(exp / 2);
    base *= base;
  }
  return result;
}
