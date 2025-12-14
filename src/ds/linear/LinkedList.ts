class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private _size: number = 0;

  addFirst(...elements: T[]): void {
    for (const element of elements) {
      const newNode = new LinkedListNode(element);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this._size++;
    }
  }

  addLast(...elements: T[]): void {
    for (const element of elements) {
      const newNode = new LinkedListNode(element);
      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this._size++;
    }
  }

  removeFirst(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const data = this.head!.data;
    this.head = this.head!.next;
    this._size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return data;
  }

  removeLast(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this._size === 1) {
      const data = this.head!.data;
      this.head = null;
      this.tail = null;
      this._size--;
      return data;
    }
    let current = this.head;
    while (current && current.next !== this.tail) {
      current = current.next;
    }
    const data = this.tail!.data;
    if (current) {
      current.next = null;
      this.tail = current;
    }
    this._size--;
    return data;
  }

  getFirst(): T | undefined {
    return this.head?.data;
  }

  getLast(): T | undefined {
    return this.tail?.data;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this._size) {
      return undefined;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next || null;
    }
    return current?.data;
  }

  remove(element: T): boolean {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head?.data === element) {
      this.head = this.head.next;
      this._size--;
      if (this.isEmpty()) {
        this.tail = null;
      }
      return true;
    }

    let current = this.head;
    while (current && current.next) {
      if (current.next.data === element) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current;
        }
        this._size--;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }

  contains(element: T): boolean {
    let current = this.head;
    while (current) {
      if (current.data === element) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  indexOf(element: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
}
