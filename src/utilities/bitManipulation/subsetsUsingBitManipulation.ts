export function subsetsUsingBitManipulation<T>(arr: T[]): T[][] {
  const n = arr.length;
  const totalSubsets = 1 << n;
  const result: T[][] = [];
  for (let i = 0; i < totalSubsets; i++) {
    const subset: T[] = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset.push(arr[j]);
      }
    }
    result.push(subset);
  }
  return result;
}
