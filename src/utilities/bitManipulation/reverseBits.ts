export function reverseBits(n: number): number {
  let result = 0;
  let num = n >>> 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (num & 1);
    num >>>= 1;
  }
  return result >>> 0;
}
