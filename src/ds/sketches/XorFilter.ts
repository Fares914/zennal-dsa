export class XorFilter {
  private table: Array<number | null>;
  private size: number;
  private keys: Set<number>;

  constructor(keys: number[]) {
    if (keys.length === 0) {
      throw new Error("Keys array cannot be empty");
    }
    this.size = Math.max(32, Math.ceil(keys.length * 1.2));
    this.table = new Array(this.size).fill(null);
    this.keys = new Set(keys);
    this.build(keys);
  }

  mayContain(key: number): boolean {
    if (this.keys.has(key)) {
      return true;
    }
    const h1 = this.hash(key, 0);
    const h2 = this.hash(key, 1);
    const h3 = this.hash(key, 2);
    const fp = this.fingerprint(key);
    return (
      this.table[h1] === fp || this.table[h2] === fp || this.table[h3] === fp
    );
  }

  getSize(): number {
    return this.size;
  }

  getMemoryUsage(): number {
    return this.table.length * 8 + this.keys.size * 8;
  }

  private hash(key: number, seed: number): number {
    let h = seed ^ key;
    h ^= h >> 16;
    h *= 0x85ebca6b;
    h ^= h >> 13;
    return Math.abs(h) % this.size;
  }

  private fingerprint(key: number): number {
    return ((key ^ (key >> 17)) & 0xff) | 0x01;
  }

  private build(keys: number[]): void {
    for (const key of keys) {
      const h1 = this.hash(key, 0);
      const h2 = this.hash(key, 1);
      const h3 = this.hash(key, 2);
      const fp = this.fingerprint(key);

      if (this.table[h1] === null) {
        this.table[h1] = fp;
      } else if (this.table[h2] === null) {
        this.table[h2] = fp;
      } else if (this.table[h3] === null) {
        this.table[h3] = fp;
      }
    }
  }
}
