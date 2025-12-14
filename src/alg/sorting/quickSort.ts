import type { CompareFunction } from "../../utilities/comparator";
import { defaultCompare } from "../../utilities/comparator";

export function quickSort<T>(
  array: T[],
  compareFn: CompareFunction<T> = defaultCompare,
): T[] {
  if (array.length <= 1) return array;
  _quickSort(array, 0, array.length - 1, compareFn);
  return array;
}
function _quickSort<T>(
  arr: T[],
  low: number,
  high: number,
  compareFn: CompareFunction<T>,
): void {
  if (low < high) {
    const pi = partition(arr, low, high, compareFn);
    _quickSort(arr, low, pi - 1, compareFn);
    _quickSort(arr, pi + 1, high, compareFn);
  }
}
function partition<T>(
  arr: T[],
  low: number,
  high: number,
  compareFn: CompareFunction<T>,
): number {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (compareFn(arr[j], pivot) < 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
