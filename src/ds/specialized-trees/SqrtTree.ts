export class SqrtTree<T> {
  private arr: T[];
  private blockSize: number;
  private blocks: T[];
  private comparator: (a: T, b: T) => number;

  constructor(arr: T[], comparator?: (a: T, b: T) => number) {
    if (arr.length === 0) {
      throw new Error("Array cannot be empty");
    }
    this.arr = [...arr];
    this.comparator =
      comparator ||
      ((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    this.blockSize = Math.ceil(Math.sqrt(arr.length));
    this.blocks = [];
    this.build();
  }

  query(l: number, r: number): T {
    if (l < 0 || r >= this.arr.length || l > r) {
      throw new Error("Invalid range");
    }
    let result = this.arr[l];

    const leftBlockIdx = Math.floor(l / this.blockSize);
    const rightBlockIdx = Math.floor(r / this.blockSize);
    if (leftBlockIdx === rightBlockIdx) {
      for (let i = l; i <= r; i++) {
        if (this.comparator(this.arr[i], result) < 0) {
          result = this.arr[i];
        }
      }
    } else {
      const leftBlockEnd = (leftBlockIdx + 1) * this.blockSize;
      for (let i = l; i < leftBlockEnd; i++) {
        if (this.comparator(this.arr[i], result) < 0) {
          result = this.arr[i];
        }
      }

      for (let i = leftBlockIdx + 1; i < rightBlockIdx; i++) {
        if (this.comparator(this.blocks[i], result) < 0) {
          result = this.blocks[i];
        }
      }

      const rightBlockStart = rightBlockIdx * this.blockSize;
      for (let i = rightBlockStart; i <= r; i++) {
        if (this.comparator(this.arr[i], result) < 0) {
          result = this.arr[i];
        }
      }
    }
    return result;
  }

  update(index: number, value: T): void {
    if (index < 0 || index >= this.arr.length) {
      throw new Error("Index out of bounds");
    }
    this.arr[index] = value;

    const blockIndex = Math.floor(index / this.blockSize);
    const startIdx = blockIndex * this.blockSize;
    const endIdx = Math.min((blockIndex + 1) * this.blockSize, this.arr.length);
    let blockMin = this.arr[startIdx];
    for (let i = startIdx + 1; i < endIdx; i++) {
      if (this.comparator(this.arr[i], blockMin) < 0) {
        blockMin = this.arr[i];
      }
    }
    this.blocks[blockIndex] = blockMin;
  }

  getSize(): number {
    return this.arr.length;
  }

  getBlockSize(): number {
    return this.blockSize;
  }

  toArray(): T[] {
    return [...this.arr];
  }

  get(index: number): T | undefined {
    return index >= 0 && index < this.arr.length ? this.arr[index] : undefined;
  }

  private build(): void {
    const numBlocks = Math.ceil(this.arr.length / this.blockSize);
    for (let i = 0; i < numBlocks; i++) {
      let blockMin = this.arr[i * this.blockSize];
      const endIdx = Math.min((i + 1) * this.blockSize, this.arr.length);
      for (let j = i * this.blockSize + 1; j < endIdx; j++) {
        if (this.comparator(this.arr[j], blockMin) < 0) {
          blockMin = this.arr[j];
        }
      }
      this.blocks[i] = blockMin;
    }
  }
}
