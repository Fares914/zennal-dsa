export class ArrayDeque<T> {
  private elements: (T | undefined)[];
  private front: number = 0;
  private rear: number = -1;
  private size: number = 0;
  private capacity: number;

  constructor(initialCapacity: number = 16) {
    if (!Number.isInteger(initialCapacity) || initialCapacity <= 0) {
      throw new Error("Capacity must be a positive integer");
    }
    this.capacity = initialCapacity;
    this.elements = new Array(initialCapacity);
  }
  private resize(): void {
    const newCapacity = this.capacity * 2;
    const newElements = new Array(newCapacity);

    for (let i = 0; i < this.size; i++) {
      newElements[i] = this.elements[(this.front + i) % this.capacity];
    }
    this.elements = newElements;
    this.front = 0;
    this.rear = this.size - 1;
    this.capacity = newCapacity;
  }

  addFirst(element: T): void {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.elements[this.front] = element;
    this.size++;
    if (this.rear === -1) {
      this.rear = this.front;
    }
  }

  addLast(element: T): void {
    if (this.size === this.capacity) {
      this.resize();
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.elements[this.rear] = element;
    this.size++;
    if (this.front === 0 && this.size === 1) {
      this.front = this.rear;
    }
  }

  removeFirst(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.elements[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    if (this.size === 0) {
      this.rear = -1;
    }
    return element;
  }

  removeLast(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.elements[this.rear];
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;
    if (this.size === 0) {
      this.rear = -1;
    }
    return element;
  }

  getFirst(): T | undefined {
    return this.isEmpty() ? undefined : this.elements[this.front];
  }

  getLast(): T | undefined {
    return this.isEmpty() ? undefined : this.elements[this.rear];
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.size) {
      return undefined;
    }
    return this.elements[(this.front + index) % this.capacity];
  }

  set(index: number, element: T): void {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    this.elements[(this.front + index) % this.capacity] = element;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  clear(): void {
    this.elements.fill(undefined);
    this.front = 0;
    this.rear = -1;
    this.size = 0;
  }

  toArray(): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.size; i++) {
      result.push(this.elements[(this.front + i) % this.capacity] as T);
    }
    return result;
  }

  contains(element: T): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.elements[(this.front + i) % this.capacity] === element) {
        return true;
      }
    }
    return false;
  }

  forEach(callback: (element: T, index: number) => void): void {
    for (let i = 0; i < this.size; i++) {
      callback(this.elements[(this.front + i) % this.capacity] as T, i);
    }
  }
}
