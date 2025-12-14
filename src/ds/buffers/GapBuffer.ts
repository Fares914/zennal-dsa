export class GapBuffer<T> {
  private buffer: (T | undefined)[];
  private gapStart: number;
  private gapEnd: number;
  private capacity: number;
  private size: number;

  constructor(capacity: number = 16) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Capacity must be a positive integer");
    }
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.gapStart = 0;
    this.gapEnd = capacity;
    this.size = 0;
  }
  private moveGap(position: number): void {
    if (position < 0 || position > this.size) {
      throw new Error("Position out of bounds");
    }
    if (position < this.gapStart) {
      const moveCount = this.gapStart - position;
      for (let i = 0; i < moveCount; i++) {
        this.buffer[this.gapEnd - 1 - i] = this.buffer[this.gapStart - 1 - i];
      }
      this.gapEnd -= moveCount;
      this.gapStart -= moveCount;
    } else if (position > this.gapStart) {
      const moveCount = position - this.gapStart;
      for (let i = 0; i < moveCount; i++) {
        this.buffer[this.gapStart + i] = this.buffer[this.gapEnd + i];
      }
      this.gapStart += moveCount;
      this.gapEnd += moveCount;
    }
  }
  private expand(): void {
    const newCapacity = this.capacity * 2;
    const newBuffer = new Array(newCapacity);

    for (let i = 0; i < this.gapStart; i++) {
      newBuffer[i] = this.buffer[i];
    }

    for (let i = this.gapEnd; i < this.capacity; i++) {
      newBuffer[i + (newCapacity - this.capacity)] = this.buffer[i];
    }
    this.buffer = newBuffer;
    this.capacity = newCapacity;
    this.gapEnd += newCapacity - this.capacity;
  }

  insert(position: number, element: T): void {
    if (position < 0 || position > this.size) {
      throw new Error("Position out of bounds");
    }
    if (this.gapStart === this.gapEnd) {
      this.expand();
    }
    this.moveGap(position);
    this.buffer[this.gapStart] = element;
    this.gapStart++;
    this.size++;
  }

  delete(position: number): void {
    if (position < 0 || position >= this.size) {
      throw new Error("Position out of bounds");
    }
    this.moveGap(position + 1);
    this.gapStart--;
    this.size--;
  }

  get(position: number): T | undefined {
    if (position < 0 || position >= this.size) {
      return undefined;
    }
    if (position < this.gapStart) {
      return this.buffer[position];
    } else {
      return this.buffer[position + (this.gapEnd - this.gapStart)];
    }
  }

  set(position: number, element: T): void {
    if (position < 0 || position >= this.size) {
      throw new Error("Position out of bounds");
    }
    if (position < this.gapStart) {
      this.buffer[position] = element;
    } else {
      this.buffer[position + (this.gapEnd - this.gapStart)] = element;
    }
  }

  getSize(): number {
    return this.size;
  }

  moveCursor(position: number): void {
    if (position < 0 || position > this.size) {
      throw new Error("Position out of bounds");
    }
    this.moveGap(position);
  }

  getCursorPosition(): number {
    return this.gapStart;
  }

  toArray(): T[] {
    const result: T[] = [];
    for (let i = 0; i < this.size; i++) {
      result.push(this.get(i) as T);
    }
    return result;
  }

  clear(): void {
    this.buffer.fill(undefined);
    this.gapStart = 0;
    this.gapEnd = this.capacity;
    this.size = 0;
  }
}
