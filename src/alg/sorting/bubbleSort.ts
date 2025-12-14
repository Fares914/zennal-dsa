import type { CompareFunction } from "../../utilities/comparator";
import { defaultCompare } from "../../utilities/comparator";

export function bubbleSort<T>(
  array: T[],
  compareFn: CompareFunction<T> = defaultCompare,
): T[] {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (compareFn(array[j], array[j + 1]) > 0) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return array;
}
