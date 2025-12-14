export class CircularBuffer<T> {
  private buffer: (T | undefined)[];
  private front: number = 0;
  private rear: number = -1;
  private count: number = 0;
  private capacity: number;

  constructor(capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Capacity must be a positive integer");
    }
    this.capacity = capacity;
    this.buffer = new Array(capacity);
  }

  enqueue(element: T): void {
    this.rear = (this.rear + 1) % this.capacity;
    this.buffer[this.rear] = element;
    if (this.count < this.capacity) {
      this.count++;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.buffer[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.count--;
    return element;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.buffer[this.front];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.capacity;
  }

  size(): number {
    return this.count;
  }

  getCapacity(): number {
    return this.capacity;
  }

  clear(): void {
    this.buffer.fill(undefined);
    this.front = 0;
    this.rear = -1;
    this.count = 0;
  }

  toArray(): T[] {
    const result: T[] = [];
    let index = this.front;
    for (let i = 0; i < this.count; i++) {
      result.push(this.buffer[index] as T);
      index = (index + 1) % this.capacity;
    }
    return result;
  }

  contains(element: T): boolean {
    let index = this.front;
    for (let i = 0; i < this.count; i++) {
      if (this.buffer[index] === element) {
        return true;
      }
      index = (index + 1) % this.capacity;
    }
    return false;
  }

  forEach(callback: (element: T, index: number) => void): void {
    let index = this.front;
    for (let i = 0; i < this.count; i++) {
      callback(this.buffer[index] as T, i);
      index = (index + 1) % this.capacity;
    }
  }
}
