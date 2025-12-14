export class PriorityQueue<T> {
  private heap: T[] = [];
  private comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.heap = [];
    this.comparator = comparator;
  }

  enqueue(...elements: T[]): void {
    for (const element of elements) {
      this.heap.push(element);
      this.bubbleUp(this.heap.length - 1);
    }
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const root = this.heap[0];
    if (this.heap.length === 1) {
      this.heap.pop();
      return root;
    }
    const last = this.heap.pop()!;
    this.heap[0] = last;
    this.bubbleDown(0);
    return root;
  }

  front(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.heap[0];
  }

  peek(): T | undefined {
    return this.front();
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  size(): number {
    return this.heap.length;
  }

  clear(): void {
    this.heap = [];
  }

  toArray(): T[] {
    const result: T[] = [];
    const heapCopy = [...this.heap];
    while (heapCopy.length > 0) {
      const min = heapCopy[0];
      result.push(min);
      if (heapCopy.length === 1) {
        heapCopy.pop();
        break;
      }
      const last = heapCopy.pop()!;
      heapCopy[0] = last;
      this.bubbleDownArray(heapCopy, 0);
    }
    return result;
  }

  forEach(callback: (element: T, index: number) => void): void {
    this.heap.forEach((element, index) => {
      callback(element, index);
    });
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.comparator(this.heap[index], this.heap[parentIndex]) >= 0) {
        break;
      }
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }
  private bubbleDown(index: number): void {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.comparator(this.heap[leftChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.comparator(this.heap[rightChildIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightChildIndex;
      }
      if (smallest === index) {
        break;
      }
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
  private bubbleDownArray(heapCopy: T[], index: number): void {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      let smallest = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      if (
        leftChildIndex < heapCopy.length &&
        this.comparator(heapCopy[leftChildIndex], heapCopy[smallest]) < 0
      ) {
        smallest = leftChildIndex;
      }
      if (
        rightChildIndex < heapCopy.length &&
        this.comparator(heapCopy[rightChildIndex], heapCopy[smallest]) < 0
      ) {
        smallest = rightChildIndex;
      }
      if (smallest === index) {
        break;
      }
      [heapCopy[index], heapCopy[smallest]] = [
        heapCopy[smallest],
        heapCopy[index],
      ];
      index = smallest;
    }
  }
}
