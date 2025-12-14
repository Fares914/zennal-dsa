interface DequeNode<T> {
  value: T;
  prev: DequeNode<T> | null;
  next: DequeNode<T> | null;
}

export class Deque<T> {
  private head: DequeNode<T> | null = null;
  private tail: DequeNode<T> | null = null;
  private _size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addFirst(...elements: T[]): void {
    for (const element of elements) {
      const newNode: DequeNode<T> = {
        value: element,
        prev: null,
        next: this.head,
      };
      if (this.head !== null) {
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
      this._size++;
    }
  }

  addLast(...elements: T[]): void {
    for (const element of elements) {
      const newNode: DequeNode<T> = {
        value: element,
        prev: this.tail,
        next: null,
      };
      if (this.tail !== null) {
        this.tail.next = newNode;
      } else {
        this.head = newNode;
      }
      this.tail = newNode;
      this._size++;
    }
  }

  removeFirst(): T | undefined {
    if (this.head === null) {
      return undefined;
    }
    const value = this.head.value;
    if (this.head.next !== null) {
      this.head.next.prev = null;
    } else {
      this.tail = null;
    }
    this.head = this.head.next;
    this._size--;
    return value;
  }

  removeLast(): T | undefined {
    if (this.tail === null) {
      return undefined;
    }
    const value = this.tail.value;
    if (this.tail.prev !== null) {
      this.tail.prev.next = null;
    } else {
      this.head = null;
    }
    this.tail = this.tail.prev;
    this._size--;
    return value;
  }

  peekFirst(): T | undefined {
    return this.head?.value;
  }

  peekLast(): T | undefined {
    return this.tail?.value;
  }

  getFirst(): T | undefined {
    return this.peekFirst();
  }

  getLast(): T | undefined {
    return this.peekLast();
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  size(): number {
    return this._size;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  contains(element: T): boolean {
    let current = this.head;
    while (current !== null) {
      if (current.value === element) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  forEach(callback: (element: T, index: number) => void): void {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      callback(current.value, index++);
      current = current.next;
    }
  }

  [Symbol.iterator](): Iterator<T> {
    let current = this.head;
    return {
      next: (): IteratorResult<T> => {
        if (current === null) {
          return { done: true, value: undefined };
        }
        const value = current.value;
        current = current.next;
        return { done: false, value };
      },
    };
  }

  reverseIterator(): Iterator<T> {
    let current = this.tail;
    return {
      next: (): IteratorResult<T> => {
        if (current === null) {
          return { done: true, value: undefined };
        }
        const value = current.value;
        current = current.prev;
        return { done: false, value };
      },
    };
  }

  removeElement(element: T): boolean {
    let current = this.head;
    while (current !== null) {
      if (current.value === element) {
        if (current.prev !== null) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next !== null) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this._size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this._size) {
      return undefined;
    }
    let current: DequeNode<T> | null;
    let currentIndex: number;

    if (index < this._size / 2) {
      current = this.head;
      currentIndex = 0;
      while (currentIndex < index && current !== null) {
        current = current.next;
        currentIndex++;
      }
    } else {
      current = this.tail;
      currentIndex = this._size - 1;
      while (currentIndex > index && current !== null) {
        current = current.prev;
        currentIndex--;
      }
    }
    return current?.value;
  }

  indexOf(element: T): number {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (current.value === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  lastIndexOf(element: T): number {
    let index = this._size - 1;
    let current = this.tail;
    while (current !== null) {
      if (current.value === element) {
        return index;
      }
      current = current.prev;
      index--;
    }
    return -1;
  }

  addLeft(...elements: T[]): void {
    this.addFirst(...elements);
  }

  addRight(...elements: T[]): void {
    this.addLast(...elements);
  }

  removeLeft(): T | undefined {
    return this.removeFirst();
  }

  removeRight(): T | undefined {
    return this.removeLast();
  }
}
