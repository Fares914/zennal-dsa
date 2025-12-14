export class Stack<T> {
  private _data: T[] = [];

  push(...elements: T[]): void {
    for (const element of elements) {
      this._data.push(element);
    }
  }

  pop(): T | undefined {
    return this._data.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._data[this._data.length - 1];
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
