export function findSingleNumber(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  let result = 0;
  for (const num of arr) {
    result ^= num;
  }
  return result;
}
