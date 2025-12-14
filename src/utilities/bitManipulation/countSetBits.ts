export function countSetBits(n: number): number {
  if (n < 0) {
    throw new Error("Input must be non-negative");
  }
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
