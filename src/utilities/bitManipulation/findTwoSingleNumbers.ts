export function findTwoSingleNumbers(arr: number[]): number[] {
  if (arr.length < 2) {
    throw new Error("Array must have at least 2 elements");
  }

  let xorAll = 0;
  for (const num of arr) {
    xorAll ^= num;
  }

  const diffBit = xorAll & -xorAll;
  let num1 = 0,
    num2 = 0;
  for (const num of arr) {
    if (num & diffBit) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }
  return [num1, num2];
}
