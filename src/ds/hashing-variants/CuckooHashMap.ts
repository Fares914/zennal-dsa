export class CuckooHashMap<K, V> {
  private table1: Array<{ key: K; value: V } | undefined>;
  private table2: Array<{ key: K; value: V } | undefined>;
  private size: number = 0;
  private capacity: number;
  private maxIterations: number = 100;

  constructor(capacity: number = 16) {
    if (capacity <= 0) {
      throw new Error("Capacity must be positive");
    }
    this.capacity = capacity;
    this.table1 = new Array(capacity);
    this.table2 = new Array(capacity);
  }
  private hash1(key: K): number {
    const str = String(key);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
    }
    return Math.abs(hash) % this.capacity;
  }
  private hash2(key: K): number {
    const str = String(key);
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
    }
    return Math.abs(hash) % this.capacity;
  }
  private resize(): void {
    const oldTable1 = this.table1;
    const oldTable2 = this.table2;
    this.capacity *= 2;
    this.table1 = new Array(this.capacity);
    this.table2 = new Array(this.capacity);
    this.size = 0;
    for (const entry of oldTable1) {
      if (entry) {
        this.set(entry.key, entry.value);
      }
    }
    for (const entry of oldTable2) {
      if (entry) {
        this.set(entry.key, entry.value);
      }
    }
  }
  private insertInternal(key: K, value: V): boolean {
    let entry = { key, value };
    let h1 = this.hash1(key);
    let h2 = this.hash2(key);
    for (let i = 0; i < this.maxIterations; i++) {
      if (!this.table1[h1]) {
        this.table1[h1] = entry;
        return true;
      }
      if (this.table1[h1]!.key === key) {
        this.table1[h1]!.value = value;
        return true;
      }

      const temp = this.table1[h1]!;
      this.table1[h1] = entry;
      entry = temp;

      if (!this.table2[h2]) {
        this.table2[h2] = entry;
        return true;
      }
      if (this.table2[h2]!.key === key) {
        this.table2[h2]!.value = entry.value;
        return true;
      }

      const temp2 = this.table2[h2]!;
      this.table2[h2] = entry;
      entry = temp2;
      h1 = this.hash1(entry.key);
      h2 = this.hash2(entry.key);
    }
    return false;
  }

  set(key: K, value: V): void {
    const h1 = this.hash1(key);
    const h2 = this.hash2(key);

    if (this.table1[h1] && this.table1[h1]!.key === key) {
      this.table1[h1]!.value = value;
      return;
    }
    if (this.table2[h2] && this.table2[h2]!.key === key) {
      this.table2[h2]!.value = value;
      return;
    }

    if (!this.insertInternal(key, value)) {
      this.resize();
      this.insertInternal(key, value);
    }
    this.size++;
  }

  get(key: K): V | undefined {
    const h1 = this.hash1(key);
    const h2 = this.hash2(key);
    if (this.table1[h1] && this.table1[h1]!.key === key) {
      return this.table1[h1]!.value;
    }
    if (this.table2[h2] && this.table2[h2]!.key === key) {
      return this.table2[h2]!.value;
    }
    return undefined;
  }

  has(key: K): boolean {
    return this.get(key) !== undefined;
  }

  delete(key: K): boolean {
    const h1 = this.hash1(key);
    const h2 = this.hash2(key);
    if (this.table1[h1] && this.table1[h1]!.key === key) {
      this.table1[h1] = undefined;
      this.size--;
      return true;
    }
    if (this.table2[h2] && this.table2[h2]!.key === key) {
      this.table2[h2] = undefined;
      this.size--;
      return true;
    }
    return false;
  }

  getSize(): number {
    return this.size;
  }

  clear(): void {
    this.table1.fill(undefined);
    this.table2.fill(undefined);
    this.size = 0;
  }

  keys(): K[] {
    const result: K[] = [];
    for (const entry of this.table1) {
      if (entry) result.push(entry.key);
    }
    for (const entry of this.table2) {
      if (entry) result.push(entry.key);
    }
    return result;
  }

  values(): V[] {
    const result: V[] = [];
    for (const entry of this.table1) {
      if (entry) result.push(entry.value);
    }
    for (const entry of this.table2) {
      if (entry) result.push(entry.value);
    }
    return result;
  }
}
