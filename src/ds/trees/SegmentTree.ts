export type SegmentTreeOperation = "sum" | "min" | "max" | "product";

export class SegmentTree<T extends number> {
  private tree: T[];
  private array: T[];
  private size: number;
  private operation: SegmentTreeOperation;
  private customFunction?: (a: T, b: T) => T;

  constructor(array: T[], operation: SegmentTreeOperation = "sum") {
    this.size = array.length;
    this.array = [...array];
    this.operation = operation;
    this.tree = new Array<T>(4 * this.size);
    this.build(0, 0, this.size - 1);
  }

  static createWithCustomFunction<T extends number>(
    array: T[],
    func: (a: T, b: T) => T,
  ): SegmentTree<T> {
    const tree = new SegmentTree(array);
    tree.customFunction = func;
    tree.build(0, 0, tree.size - 1);
    return tree;
  }
  private build(node: number, start: number, end: number): T {
    if (start === end) {
      this.tree[node] = this.array[start];
      return this.tree[node];
    }
    const mid = Math.floor((start + end) / 2);
    const leftVal = this.build(2 * node + 1, start, mid);
    const rightVal = this.build(2 * node + 2, mid + 1, end);
    this.tree[node] = this.aggregate(leftVal, rightVal);
    return this.tree[node];
  }
  private aggregate(a: T, b: T): T {
    if (this.customFunction) {
      return this.customFunction(a, b);
    }
    switch (this.operation) {
      case "sum":
        return (a + b) as T;
      case "min":
        return Math.min(a, b) as T;
      case "max":
        return Math.max(a, b) as T;
      case "product":
        return (a * b) as T;
      default:
        return (a + b) as T;
    }
  }

  update(index: number, value: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.array[index] = value;
    this.updateHelper(0, 0, this.size - 1, index, value);
  }
  private updateHelper(
    node: number,
    start: number,
    end: number,
    index: number,
    value: T,
  ): void {
    if (start === end) {
      this.tree[node] = value;
      return;
    }
    const mid = Math.floor((start + end) / 2);
    if (index <= mid) {
      this.updateHelper(2 * node + 1, start, mid, index, value);
    } else {
      this.updateHelper(2 * node + 2, mid + 1, end, index, value);
    }
    const leftVal = this.tree[2 * node + 1];
    const rightVal = this.tree[2 * node + 2];
    this.tree[node] = this.aggregate(leftVal, rightVal);
  }

  query(left: number, right: number): T {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    return this.queryHelper(0, 0, this.size - 1, left, right);
  }
  private queryHelper(
    node: number,
    start: number,
    end: number,
    left: number,
    right: number,
  ): T {
    if (left > end || right < start) {
      return this.getIdentity();
    }

    if (left <= start && end <= right) {
      return this.tree[node];
    }

    const mid = Math.floor((start + end) / 2);
    const leftResult = this.queryHelper(2 * node + 1, start, mid, left, right);
    const rightResult = this.queryHelper(
      2 * node + 2,
      mid + 1,
      end,
      left,
      right,
    );
    return this.aggregate(leftResult, rightResult);
  }
  private getIdentity(): T {
    switch (this.operation) {
      case "sum":
        return 0 as T;
      case "min":
        return Infinity as T;
      case "max":
        return -Infinity as T;
      case "product":
        return 1 as T;
      default:
        return 0 as T;
    }
  }

  rangeUpdate(left: number, right: number, value: T): void {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    for (let i = left; i <= right; i++) {
      this.update(i, (this.array[i] + value) as T);
    }
  }

  getArray(): T[] {
    return [...this.array];
  }

  getSize(): number {
    return this.size;
  }

  getOperation(): SegmentTreeOperation {
    return this.operation;
  }

  maxSubarraySum(left: number, right: number): T {
    if (this.operation !== "sum") {
      throw new Error("maxSubarraySum only works with sum operation");
    }
    let maxSum = this.array[left];
    let currentSum = this.array[left];
    for (let i = left + 1; i <= right; i++) {
      currentSum = Math.max(this.array[i], currentSum + this.array[i]) as T;
      maxSum = Math.max(maxSum, currentSum) as T;
    }
    return maxSum;
  }

  minElementIndex(left: number, right: number): number {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    let minIndex = left;
    for (let i = left + 1; i <= right; i++) {
      if (this.array[i] < this.array[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }

  maxElementIndex(left: number, right: number): number {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    let maxIndex = left;
    for (let i = left + 1; i <= right; i++) {
      if (this.array[i] > this.array[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }
  countInRange(
    left: number,
    right: number,
    predicate: (val: T) => boolean,
  ): number {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    let count = 0;
    for (let i = left; i <= right; i++) {
      if (predicate(this.array[i])) {
        count++;
      }
    }
    return count;
  }
  findFirst(
    left: number,
    right: number,
    predicate: (val: T) => boolean,
  ): number {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    for (let i = left; i <= right; i++) {
      if (predicate(this.array[i])) {
        return i;
      }
    }
    return -1;
  }

  getRange(left: number, right: number): T[] {
    if (left < 0 || right >= this.size || left > right) {
      throw new Error("Invalid range");
    }
    const result: T[] = [];
    for (let i = left; i <= right; i++) {
      result.push(this.array[i]);
    }
    return result;
  }

  validate(): boolean {
    return this.validateHelper(0, 0, this.size - 1);
  }
  private validateHelper(node: number, start: number, end: number): boolean {
    if (start === end) {
      return this.tree[node] === this.array[start];
    }
    const mid = Math.floor((start + end) / 2);
    const leftValid = this.validateHelper(2 * node + 1, start, mid);
    const rightValid = this.validateHelper(2 * node + 2, mid + 1, end);
    if (!leftValid || !rightValid) {
      return false;
    }
    const expectedVal = this.aggregate(
      this.tree[2 * node + 1],
      this.tree[2 * node + 2],
    );
    return this.tree[node] === expectedVal;
  }

  getTreeStructure(): T[] {
    return [...this.tree];
  }

  clear(): void {
    this.array = [];
    this.tree = [];
    this.size = 0;
  }
}
