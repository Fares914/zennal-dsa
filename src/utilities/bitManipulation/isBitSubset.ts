export function isBitSubset(num: number, mask: number): boolean {
  return (num & mask) === num;
}
