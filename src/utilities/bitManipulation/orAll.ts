export function orAll(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array must not be empty");
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result |= arr[i];
  }
  return result;
}
