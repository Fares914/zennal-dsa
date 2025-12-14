export type HeapType = "min" | "max";

export class Heap<T> {
  private heap: T[] = [];
  private compareFn: (a: T, b: T) => number;
  private type: HeapType;

  constructor(compareFn: (a: T, b: T) => number, type: HeapType = "min") {
    this.compareFn = compareFn;
    this.type = type;
  }

  static minHeap<T>(compareFn?: (a: T, b: T) => number): Heap<T> {
    return new Heap<T>(compareFn || Heap.defaultCompare, "min");
  }

  static maxHeap<T>(compareFn?: (a: T, b: T) => number): Heap<T> {
    return new Heap<T>(compareFn || Heap.defaultCompare, "max");
  }
  private static readonly defaultCompare = (a: unknown, b: unknown): number => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((a as any) < (b as any)) return -1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((a as any) > (b as any)) return 1;
    return 0;
  };
  private shouldSwap(a: T, b: T): boolean {
    const cmp = this.compareFn(a, b);
    return this.type === "min" ? cmp < 0 : cmp > 0;
  }
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.shouldSwap(this.heap[index], this.heap[parentIndex])) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  private bubbleDown(index: number): void {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let targetIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        leftChildIndex < this.heap.length &&
        this.shouldSwap(this.heap[leftChildIndex], this.heap[targetIndex])
      ) {
        targetIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.shouldSwap(this.heap[rightChildIndex], this.heap[targetIndex])
      ) {
        targetIndex = rightChildIndex;
      }
      if (targetIndex === index) {
        break;
      }
      this.swap(index, targetIndex);
      index = targetIndex;
    }
  }

  insert(...values: T[]): void {
    for (const value of values) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1);
    }
  }

  extract(): T | undefined {
    if (this.heap.length === 0) return undefined;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown(0);
    return root;
  }

  peek(): T | undefined {
    return this.heap.length > 0 ? this.heap[0] : undefined;
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  clear(): void {
    this.heap = [];
  }

  buildHeap(array: T[]): void {
    this.heap = [...array];

    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  heapify(): void {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  toSortedArray(): T[] {
    const result: T[] = [];
    const tempHeap = new Heap(this.compareFn, this.type);
    tempHeap.heap = [...this.heap];
    while (!tempHeap.isEmpty()) {
      result.push(tempHeap.extract()!);
    }
    return result;
  }

  toArray(): T[] {
    return [...this.heap];
  }

  forEach(callback: (value: T, index: number, heap: Heap<T>) => void): void {
    for (let i = 0; i < this.heap.length; i++) {
      callback(this.heap[i], i, this);
    }
  }

  map<U>(
    callback: (value: T, index: number) => U,
    compareFn: (a: U, b: U) => number,
  ): Heap<U> {
    const result = new Heap(compareFn, this.type);
    for (let i = 0; i < this.heap.length; i++) {
      result.insert(callback(this.heap[i], i));
    }
    return result;
  }

  filter(predicate: (value: T, index: number) => boolean): Heap<T> {
    const result = new Heap(this.compareFn, this.type);
    for (let i = 0; i < this.heap.length; i++) {
      if (predicate(this.heap[i], i)) {
        result.insert(this.heap[i]);
      }
    }
    return result;
  }

  replace(value: T): T | undefined {
    if (this.heap.length === 0) {
      this.insert(value);
      return undefined;
    }
    const old = this.heap[0];
    this.heap[0] = value;
    this.bubbleDown(0);
    return old;
  }

  contains(value: T): boolean {
    for (const element of this.heap) {
      if (this.compareFn(element, value) === 0) {
        return true;
      }
    }
    return false;
  }

  height(): number {
    if (this.heap.length === 0) return -1;
    return Math.ceil(Math.log2(this.heap.length + 1)) - 1;
  }

  isValid(): boolean {
    for (let i = 0; i < this.heap.length; i++) {
      const leftChildIndex = this.getLeftChildIndex(i);
      const rightChildIndex = this.getRightChildIndex(i);
      if (
        leftChildIndex < this.heap.length &&
        this.shouldSwap(this.heap[leftChildIndex], this.heap[i])
      ) {
        return false;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.shouldSwap(this.heap[rightChildIndex], this.heap[i])
      ) {
        return false;
      }
    }
    return true;
  }

  topK(k: number): T[] {
    const result: T[] = [];
    const tempHeap = new Heap(this.compareFn, this.type);
    tempHeap.heap = [...this.heap];
    for (let i = 0; i < k && !tempHeap.isEmpty(); i++) {
      result.push(tempHeap.extract()!);
    }
    return result;
  }

  merge(other: Heap<T>): void {
    for (const element of other.heap) {
      this.insert(element);
    }
  }
}
