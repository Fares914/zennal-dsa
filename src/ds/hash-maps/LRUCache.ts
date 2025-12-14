interface CacheNode<K, V> {
  key: K;
  value: V;
  prev: CacheNode<K, V> | null;
  next: CacheNode<K, V> | null;
}

export class LRUCache<K, V> {
  private capacity: number;
  private cache: Map<K, CacheNode<K, V>>;
  private head: CacheNode<K, V> | null;
  private tail: CacheNode<K, V> | null;
  private size: number;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("Capacity must be greater than 0");
    }
    this.capacity = capacity;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  get(key: K): V | undefined {
    const node = this.cache.get(key);
    if (node === undefined) {
      return undefined;
    }

    this.moveToHead(node);
    return node.value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.value = value;
      this.moveToHead(node);
      return;
    }

    const newNode: CacheNode<K, V> = {
      key,
      value,
      prev: null,
      next: null,
    };

    this.cache.set(key, newNode);
    this.addToHead(newNode);
    this.size++;

    if (this.size > this.capacity) {
      this.removeLRU();
    }
  }

  remove(key: K): boolean {
    const node = this.cache.get(key);
    if (node === undefined) {
      return false;
    }
    this.removeNode(node);
    this.cache.delete(key);
    this.size--;
    return true;
  }

  clear(): void {
    this.cache.clear();
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }

  has(key: K): boolean {
    return this.cache.has(key);
  }

  getKeys(): K[] {
    const keys: K[] = [];
    let node = this.head;
    while (node !== null) {
      keys.push(node.key);
      node = node.next;
    }
    return keys;
  }

  getValues(): V[] {
    const values: V[] = [];
    let node = this.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }
    return values;
  }

  getEntries(): Array<[K, V]> {
    const entries: Array<[K, V]> = [];
    let node = this.head;
    while (node !== null) {
      entries.push([node.key, node.value]);
      node = node.next;
    }
    return entries;
  }

  getLRUKey(): K | undefined {
    return this.tail?.key;
  }

  getMRUKey(): K | undefined {
    return this.head?.key;
  }
  private moveToHead(node: CacheNode<K, V>): void {
    if (node === this.head) {
      return;
    }
    this.removeNode(node);
    this.addToHead(node);
  }
  private addToHead(node: CacheNode<K, V>): void {
    node.prev = null;
    node.next = this.head;
    if (this.head !== null) {
      this.head.prev = node;
    }
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
  }
  private removeNode(node: CacheNode<K, V>): void {
    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }
  private removeLRU(): void {
    if (this.tail !== null) {
      this.cache.delete(this.tail.key);
      this.removeNode(this.tail);
      this.size--;
    }
  }
}
