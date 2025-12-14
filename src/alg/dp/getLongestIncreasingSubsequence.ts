export function getLongestIncreasingSubsequence(arr: number[]): number[] {
  if (arr.length === 0) return [];
  const tails: number[] = [];
  const backtrack: number[] = Array(arr.length).fill(-1);
  const tailIndices: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (left > 0) {
      backtrack[i] = tailIndices[left - 1];
    }
    tails[left] = num;
    tailIndices[left] = i;
  }

  const lis: number[] = [];
  let idx = tailIndices[tails.length - 1];
  while (idx !== -1) {
    lis.unshift(arr[idx]);
    idx = backtrack[idx];
  }
  return lis;
}
