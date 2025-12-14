export interface List<T> {
  add(...elements: T[]): void;

  addAt(index: number, element: T): void;

  get(index: number): T | undefined;

  set(index: number, element: T): T;

  remove(index: number): T | undefined;

  indexOf(element: T): number;

  contains(element: T): boolean;

  size(): number;

  isEmpty(): boolean;

  clear(): void;

  toArray(): T[];
}

export class ArrayList<T> implements List<T> {
  private _data: T[];

  constructor(_initialCapacity: number = 10) {
    this._data = new Array<T>(_initialCapacity);
  }

  add(...elements: T[]): void {
    for (const element of elements) {
      this._data.push(element);
    }
  }

  addAt(index: number, element: T): void {
    if (index < 0 || index > this._data.length) {
      throw new Error("Index out of bounds");
    }
    this._data.splice(index, 0, element);
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this._data.length) {
      throw new Error("Index out of bounds");
    }
    return this._data[index];
  }

  set(index: number, element: T): T {
    if (index < 0 || index >= this._data.length) {
      throw new Error("Index out of bounds");
    }
    const old = this._data[index];
    this._data[index] = element;
    return old;
  }

  remove(index: number): T | undefined {
    if (index < 0 || index >= this._data.length) {
      return undefined;
    }
    return this._data.splice(index, 1)[0];
  }

  indexOf(element: T): number {
    return this._data.indexOf(element);
  }

  contains(element: T): boolean {
    return this._data.includes(element);
  }

  size(): number {
    return this._data.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this._data = [];
  }

  toArray(): T[] {
    return [...this._data];
  }
}
