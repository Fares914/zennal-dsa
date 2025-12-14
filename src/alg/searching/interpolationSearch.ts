export function interpolationSearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;
  while (left <= right && target >= array[left] && target <= array[right]) {
    if (array[right] === array[left]) {
      return array[left] === target ? left : -1;
    }

    const pos =
      left +
      Math.floor(
        ((target - array[left]) / (array[right] - array[left])) *
          (right - left),
      );
    if (array[pos] === target) {
      return pos;
    }
    if (array[pos] < target) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }
  return -1;
}
