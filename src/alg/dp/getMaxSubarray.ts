export function getMaxSubarray(arr: number[]): number[] {
  if (arr.length === 0) return [];
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxEndingHere + arr[i]) {
      maxEndingHere = arr[i];
      tempStart = i;
    } else {
      maxEndingHere += arr[i];
    }
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = tempStart;
      end = i;
    }
  }
  return arr.slice(start, end + 1);
}
