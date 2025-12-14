export function intSqrt(n: number): number {
  if (n < 0) {
    throw new Error("n must be non-negative");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let left = 1,
    right = Math.floor(n / 2) + 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    if (square === n) return mid;
    if (square < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}
