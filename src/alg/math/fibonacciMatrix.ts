export function fibonacciMatrix(n: number): number {
  if (n < 0) {
    throw new Error("Index must be non-negative");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  const helper = (num: number): [number, number] => {
    if (num === 1) {
      return [1, 1];
    }
    const [f1, f2] = helper(Math.floor(num / 2));
    const f3 = f1 * (2 * f2 - f1);
    const f4 = f1 * f1 + f2 * f2;
    if (num % 2 === 0) {
      return [f3, f4];
    } else {
      return [f4, f3 + f4];
    }
  };
  return helper(n)[0];
}
