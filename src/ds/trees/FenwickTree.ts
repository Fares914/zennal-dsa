export class FenwickTree {
  private tree: number[];
  private arr: number[];
  private n: number;

  constructor(arr: number[]) {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    this.n = arr.length;
    this.arr = [...arr];
    this.tree = new Array(this.n + 1).fill(0);

    for (let i = 0; i < this.n; i++) {
      this.updateTree(i, arr[i]);
    }
  }

  update(index: number, value: number): void {
    this.validateIndex(index);
    const delta = value - this.arr[index];
    this.arr[index] = value;
    this.updateTree(index, delta);
  }

  prefixSum(index: number): number {
    this.validateIndex(index);
    let sum = 0;
    let i = index + 1;
    while (i > 0) {
      sum += this.tree[i];
      i -= i & -i;
    }
    return sum;
  }

  rangeSum(left: number, right: number): number {
    this.validateRange(left, right);
    if (left === 0) {
      return this.prefixSum(right);
    }
    return this.prefixSum(right) - this.prefixSum(left - 1);
  }

  get(index: number): number {
    this.validateIndex(index);
    return this.arr[index];
  }

  getArray(): number[] {
    return [...this.arr];
  }

  getSize(): number {
    return this.n;
  }

  clear(): void {
    this.arr.fill(0);
    this.tree.fill(0);
  }

  findFirstIndexWithPrefixSum(targetSum: number): number {
    let left = 0;
    let right = this.n - 1;
    let result = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const sum = this.prefixSum(mid);
      if (sum >= targetSum) {
        result = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }

  findIndexWithExactPrefixSum(targetSum: number): number {
    for (let i = 0; i < this.n; i++) {
      if (this.prefixSum(i) === targetSum) {
        return i;
      }
    }
    return -1;
  }

  rangeUpdate(left: number, right: number, delta: number): void {
    this.validateRange(left, right);
    for (let i = left; i <= right; i++) {
      this.update(i, this.arr[i] + delta);
    }
  }

  rangeMin(left: number, right: number): number {
    this.validateRange(left, right);
    let min = this.arr[left];
    for (let i = left + 1; i <= right; i++) {
      if (this.arr[i] < min) {
        min = this.arr[i];
      }
    }
    return min;
  }

  rangeMax(left: number, right: number): number {
    this.validateRange(left, right);
    let max = this.arr[left];
    for (let i = left + 1; i <= right; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }
    return max;
  }
  countInRange(
    left: number,
    right: number,
    predicate: (value: number) => boolean,
  ): number {
    this.validateRange(left, right);
    let count = 0;
    for (let i = left; i <= right; i++) {
      if (predicate(this.arr[i])) {
        count++;
      }
    }
    return count;
  }
  private validateIndex(index: number): void {
    if (index < 0 || index >= this.n) {
      throw new Error(
        `Index ${index} out of bounds for array of size ${this.n}`,
      );
    }
  }
  private validateRange(left: number, right: number): void {
    if (left < 0 || right >= this.n || left > right) {
      throw new Error(
        `Invalid range [${left}, ${right}] for array of size ${this.n}`,
      );
    }
  }
  private updateTree(index: number, delta: number): void {
    let i = index + 1;
    while (i <= this.n) {
      this.tree[i] += delta;
      i += i & -i;
    }
  }
}
