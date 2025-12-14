export function toggleBit(n: number, position: number): number {
  if (position < 0 || position > 31) {
    throw new Error("Position must be between 0 and 31");
  }
  return n ^ (1 << position);
}
