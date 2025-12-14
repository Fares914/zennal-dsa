export function findLeftmostSetBit(n: number): number {
  if (n === 0) return -1;
  let position = 0;
  while (n > 1) {
    n >>= 1;
    position++;
  }
  return position;
}
