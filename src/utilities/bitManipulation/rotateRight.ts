export function rotateRight(n: number, k: number): number {
  k = k % 32;
  return ((n >>> k) | (n << (32 - k))) >>> 0;
}
