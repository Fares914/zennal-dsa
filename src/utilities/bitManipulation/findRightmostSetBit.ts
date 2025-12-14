export function findRightmostSetBit(n: number): number {
  if (n === 0) return -1;
  let position = 0;
  while ((n & 1) === 0) {
    n >>= 1;
    position++;
  }
  return position;
}
