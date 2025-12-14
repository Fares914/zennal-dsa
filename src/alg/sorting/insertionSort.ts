import type { CompareFunction } from "../../utilities/comparator";
import { defaultCompare } from "../../utilities/comparator";

export function insertionSort<T>(
  array: T[],
  compareFn: CompareFunction<T> = defaultCompare,
): T[] {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && compareFn(array[j], key) > 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
