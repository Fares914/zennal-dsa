export function longestIncreasingSubsequence(arr: number[]): number {
  if (arr.length === 0) return 0;

  const tails: number[] = [];
  for (const num of arr) {
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
    tails[left] = num;
  }
  return tails.length;
}
