export class Queue<T> {
  private _data: T[] = [];

  enqueue(...elements: T[]): void {
    for (const element of elements) {
      this._data.push(element);
    }
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._data.shift();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._data[0];
  }

  front(): T | undefined {
    return this.peek();
  }

  isEmpty(): boolean {
    return this._data.length === 0;
  }

  size(): number {
    return this._data.length;
  }

  clear(): void {
    this._data = [];
  }

  toArray(): T[] {
    return [...this._data];
  }

  contains(element: T): boolean {
    return this._data.includes(element);
  }

  forEach(callback: (element: T, index: number) => void): void {
    this._data.forEach(callback);
  }
}
