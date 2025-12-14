export class RobinHoodHashMap<K, V> {
  private table: Array<{ key: K; value: V; distance: number } | undefined>;
  private size: number = 0;
  private capacity: number;
  private loadFactor: number = 0.75;

  constructor(capacity: number = 16) {
    if (!this.isPowerOfTwo(capacity)) {
      throw new Error("Capacity must be a power of 2");
    }
    this.capacity = capacity;
    this.table = new Array(capacity);
  }
  private isPowerOfTwo(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0;
  }
  private hash(key: K): number {
    const str = String(key);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash) % this.capacity;
  }
  private resize(): void {
    const oldEntries = this.table;
    this.capacity *= 2;
    this.table = new Array(this.capacity);
    this.size = 0;
    for (const entry of oldEntries) {
      if (entry) {
        this.set(entry.key, entry.value);
      }
    }
  }

  set(key: K, value: V): void {
    if (this.size >= this.capacity * this.loadFactor) {
      this.resize();
    }
    const distance = 0;
    let index = this.hash(key);
    let entry = { key, value, distance };
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (!this.table[index]) {
        this.table[index] = entry;
        this.size++;
        return;
      }
      const existing = this.table[index]!;

      if (existing.key === key) {
        existing.value = value;
        return;
      }

      if (distance > existing.distance) {
        [entry, this.table[index]] = [this.table[index]!, entry];
      }
      index = (index + 1) % this.capacity;
      entry.distance++;
    }
  }

  get(key: K): V | undefined {
    let distance = 0;
    let index = this.hash(key);
    while (this.table[index]) {
      const entry = this.table[index]!;
      if (entry.key === key) {
        return entry.value;
      }
      if (distance > entry.distance) {
        return undefined;
      }
      index = (index + 1) % this.capacity;
      distance++;
    }
    return undefined;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: K): boolean {
    let distance = 0;
    let index = this.hash(key);
    while (this.table[index]) {
      const entry = this.table[index]!;
      if (entry.key === key) {
        let shiftIndex = index;
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const nextIndex = (shiftIndex + 1) % this.capacity;
          const nextEntry = this.table[nextIndex];
          if (!nextEntry || nextEntry.distance === 0) {
            this.table[shiftIndex] = undefined;
            break;
          }
          this.table[shiftIndex] = nextEntry;
          nextEntry.distance--;
          shiftIndex = nextIndex;
        }
        this.size--;
        return true;
      }
      if (distance > entry.distance) {
        return false;
      }
      index = (index + 1) % this.capacity;
      distance++;
    }
    return false;
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  clear(): void {
    this.table.fill(undefined);
    this.size = 0;
  }

  keys(): K[] {
    const result: K[] = [];
    for (const entry of this.table) {
      if (entry) {
        result.push(entry.key);
      }
    }
    return result;
  }

  values(): V[] {
    const result: V[] = [];
    for (const entry of this.table) {
      if (entry) {
        result.push(entry.value);
      }
    }
    return result;
  }

  getEntries(): Array<[K, V]> {
    const result: Array<[K, V]> = [];
    for (const entry of this.table) {
      if (entry) {
        result.push([entry.key, entry.value]);
      }
    }
    return result;
  }

  forEach(callback: (value: V, key: K) => void): void {
    for (const entry of this.table) {
      if (entry) {
        callback(entry.value, entry.key);
      }
    }
  }
}
