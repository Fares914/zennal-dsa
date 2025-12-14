import type { CompareFunction } from "../../utilities/comparator";
import { defaultCompare } from "../../utilities/comparator";

export function heapSort<T>(
  array: T[],
  compareFn: CompareFunction<T> = defaultCompare,
): T[] {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, compareFn);
  }

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, compareFn);
  }
  return array;
}
function heapify<T>(
  arr: T[],
  n: number,
  i: number,
  compareFn: CompareFunction<T>,
): void {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && compareFn(arr[left], arr[largest]) > 0) {
    largest = left;
  }
  if (right < n && compareFn(arr[right], arr[largest]) > 0) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest, compareFn);
  }
}
