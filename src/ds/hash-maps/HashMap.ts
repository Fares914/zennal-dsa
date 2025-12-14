interface Entry<K, V> {
  key: K;
  value: V;
  next: Entry<K, V> | null;
}

export class HashMap<K, V> {
  private buckets: (Entry<K, V> | null)[];
  private _size: number = 0;
  private readonly DEFAULT_CAPACITY = 16;
  private readonly LOAD_FACTOR = 0.75;
  private keyHashFn: (key: K) => number;

  constructor(keyHashFn?: (key: K) => number, initialCapacity?: number) {
    this.buckets = new Array(initialCapacity || this.DEFAULT_CAPACITY).fill(
      null,
    );
    this.keyHashFn = keyHashFn || this.defaultHash;
  }
  private defaultHash = (key: K): number => {
    const str = String(key);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  };
  private getBucketIndex(key: K): number {
    const hash = this.keyHashFn(key);
    return hash % this.buckets.length;
  }
  private keysEqual(key1: K, key2: K): boolean {
    if (key1 === key2) return true;
    if (typeof key1 === "object" && typeof key2 === "object") {
      return JSON.stringify(key1) === JSON.stringify(key2);
    }
    return false;
  }

  put(key: K, value: V): V | undefined {
    if (this._size >= this.buckets.length * this.LOAD_FACTOR) {
      this.resize();
    }
    const index = this.getBucketIndex(key);
    let entry = this.buckets[index];

    while (entry !== null) {
      if (this.keysEqual(entry.key, key)) {
        const oldValue = entry.value;
        entry.value = value;
        return oldValue;
      }
      entry = entry.next;
    }

    this.buckets[index] = {
      key,
      value,
      next: this.buckets[index],
    };
    this._size++;
    return undefined;
  }

  set(key: K, value: V): V | undefined {
    return this.put(key, value);
  }

  get(key: K): V | undefined {
    const index = this.getBucketIndex(key);
    let entry = this.buckets[index];
    while (entry !== null) {
      if (this.keysEqual(entry.key, key)) {
        return entry.value;
      }
      entry = entry.next;
    }
    return undefined;
  }

  remove(key: K): V | undefined {
    const index = this.getBucketIndex(key);
    let entry = this.buckets[index];
    let prevEntry: Entry<K, V> | null = null;
    while (entry !== null) {
      if (this.keysEqual(entry.key, key)) {
        if (prevEntry === null) {
          this.buckets[index] = entry.next;
        } else {
          prevEntry.next = entry.next;
        }
        this._size--;
        return entry.value;
      }
      prevEntry = entry;
      entry = entry.next;
    }
    return undefined;
  }

  containsKey(key: K): boolean {
    return this.get(key) !== undefined;
  }

  containsValue(value: V): boolean {
    for (let i = 0; i < this.buckets.length; i++) {
      let entry = this.buckets[i];
      while (entry !== null) {
        if (entry.value === value) {
          return true;
        }
        entry = entry.next;
      }
    }
    return false;
  }

  keys(): K[] {
    const result: K[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let entry = this.buckets[i];
      while (entry !== null) {
        result.push(entry.key);
        entry = entry.next;
      }
    }
    return result;
  }

  values(): V[] {
    const result: V[] = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let entry = this.buckets[i];
      while (entry !== null) {
        result.push(entry.value);
        entry = entry.next;
      }
    }
    return result;
  }

  entries(): Array<[K, V]> {
    const result: Array<[K, V]> = [];
    for (let i = 0; i < this.buckets.length; i++) {
      let entry = this.buckets[i];
      while (entry !== null) {
        result.push([entry.key, entry.value]);
        entry = entry.next;
      }
    }
    return result;
  }

  size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  clear(): void {
    this.buckets.fill(null);
    this._size = 0;
  }
  private resize(): void {
    const oldBuckets = this.buckets;
    this.buckets = new Array(oldBuckets.length * 2).fill(null);
    this._size = 0;

    for (let i = 0; i < oldBuckets.length; i++) {
      let entry = oldBuckets[i];
      while (entry !== null) {
        this.put(entry.key, entry.value);
        entry = entry.next;
      }
    }
  }

  forEach(callback: (value: V, key: K, map: HashMap<K, V>) => void): void {
    for (let i = 0; i < this.buckets.length; i++) {
      let entry = this.buckets[i];
      while (entry !== null) {
        callback(entry.value, entry.key, this);
        entry = entry.next;
      }
    }
  }

  map<U>(callback: (value: V, key: K) => U): HashMap<K, U> {
    const result = new HashMap<K, U>(this.keyHashFn);
    this.forEach((value, key) => {
      result.put(key, callback(value, key));
    });
    return result;
  }

  filter(predicate: (value: V, key: K) => boolean): HashMap<K, V> {
    const result = new HashMap<K, V>(this.keyHashFn);
    this.forEach((value, key) => {
      if (predicate(value, key)) {
        result.put(key, value);
      }
    });
    return result;
  }

  reduce<U>(
    callback: (accumulator: U, value: V, key: K) => U,
    initialValue: U,
  ): U {
    let accumulator = initialValue;
    this.forEach((value, key) => {
      accumulator = callback(accumulator, value, key);
    });
    return accumulator;
  }

  merge(other: HashMap<K, V>): HashMap<K, V> {
    other.forEach((value, key) => {
      this.put(key, value);
    });
    return this;
  }

  getOrDefault(key: K, defaultValue: V): V {
    const value = this.get(key);
    return value !== undefined ? value : defaultValue;
  }

  putIfAbsent(key: K, value: V): V {
    const existing = this.get(key);
    if (existing !== undefined) {
      return existing;
    }
    this.put(key, value);
    return value;
  }

  getCapacity(): number {
    return this.buckets.length;
  }

  getLoadFactor(): number {
    return this._size / this.buckets.length;
  }
}
