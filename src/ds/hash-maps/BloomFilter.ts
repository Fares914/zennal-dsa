export interface BloomFilterOptions {
  expectedElements: number;

  falsePositiveProbability?: number;
}

export class BloomFilter {
  private bitArray: Uint8Array;
  private size: number;
  private hashFunctions: number;
  private elementCount: number;

  constructor(options: BloomFilterOptions) {
    const { expectedElements, falsePositiveProbability = 0.01 } = options;
    if (expectedElements <= 0) {
      throw new Error("Expected elements must be greater than 0");
    }
    if (falsePositiveProbability <= 0 || falsePositiveProbability >= 1) {
      throw new Error("False positive probability must be between 0 and 1");
    }

    this.size = Math.ceil(
      -(expectedElements * Math.log(falsePositiveProbability)) /
        (Math.LN2 * Math.LN2),
    );

    this.hashFunctions = Math.max(
      1,
      Math.round((this.size / expectedElements) * Math.LN2),
    );

    const byteSize = Math.ceil(this.size / 8);
    this.bitArray = new Uint8Array(byteSize);
    this.elementCount = 0;
  }

  add(...elements: (string | number)[]): void {
    for (const element of elements) {
      const hashes = this.getHashes(String(element));
      for (const hash of hashes) {
        const bitIndex = Math.abs(hash) % this.size;
        const byteIndex = Math.floor(bitIndex / 8);
        const bitPosition = bitIndex % 8;
        this.bitArray[byteIndex] |= 1 << bitPosition;
      }
      this.elementCount++;
    }
  }

  contains(element: string | number): boolean {
    const hashes = this.getHashes(String(element));
    for (const hash of hashes) {
      const bitIndex = Math.abs(hash) % this.size;
      const byteIndex = Math.floor(bitIndex / 8);
      const bitPosition = bitIndex % 8;
      if ((this.bitArray[byteIndex] & (1 << bitPosition)) === 0) {
        return false;
      }
    }
    return true;
  }

  clear(): void {
    this.bitArray.fill(0);
    this.elementCount = 0;
  }

  getSize(): number {
    return this.size;
  }
  getHashFunctionCount(): number {
    return this.hashFunctions;
  }
  getElementCount(): number {
    return this.elementCount;
  }
  getFillRatio(): number {
    let setBitCount = 0;
    for (let i = 0; i < this.bitArray.length; i++) {
      let byte = this.bitArray[i];
      while (byte) {
        setBitCount += byte & 1;
        byte >>= 1;
      }
    }
    return setBitCount / this.size;
  }

  getEstimatedFalsePositiveProbability(): number {
    const exponent = (-this.hashFunctions * this.elementCount) / this.size;
    const term = Math.pow(1 - Math.exp(exponent), this.hashFunctions);
    return Math.min(1, term);
  }
  private getHashes(element: string): number[] {
    const hashes: number[] = [];
    for (let i = 0; i < this.hashFunctions; i++) {
      let hash = i;
      for (let j = 0; j < element.length; j++) {
        hash = (hash << 5) - hash + element.charCodeAt(j);
        hash = hash & hash;
      }
      hashes.push(hash);
    }
    return hashes;
  }
}

export class CountingBloomFilter {
  private counters: Uint8Array;
  private size: number;
  private hashFunctions: number;
  private elementCount: number;

  constructor(options: BloomFilterOptions) {
    const { expectedElements, falsePositiveProbability = 0.01 } = options;
    if (expectedElements <= 0) {
      throw new Error("Expected elements must be greater than 0");
    }
    if (falsePositiveProbability <= 0 || falsePositiveProbability >= 1) {
      throw new Error("False positive probability must be between 0 and 1");
    }

    this.size = Math.ceil(
      -(expectedElements * Math.log(falsePositiveProbability)) /
        (Math.LN2 * Math.LN2),
    );
    this.hashFunctions = Math.max(
      1,
      Math.round((this.size / expectedElements) * Math.LN2),
    );

    this.counters = new Uint8Array(this.size);
    this.elementCount = 0;
  }

  add(element: string | number): void {
    const hashes = this.getHashes(String(element));
    for (const hash of hashes) {
      const index = Math.abs(hash) % this.size;

      if (this.counters[index] < 255) {
        this.counters[index]++;
      }
    }
    this.elementCount++;
  }

  remove(element: string | number): boolean {
    if (!this.contains(element)) {
      return false;
    }
    const hashes = this.getHashes(String(element));
    for (const hash of hashes) {
      const index = Math.abs(hash) % this.size;
      if (this.counters[index] > 0) {
        this.counters[index]--;
      }
    }
    this.elementCount = Math.max(0, this.elementCount - 1);
    return true;
  }

  contains(element: string | number): boolean {
    const hashes = this.getHashes(String(element));
    for (const hash of hashes) {
      const index = Math.abs(hash) % this.size;
      if (this.counters[index] === 0) {
        return false;
      }
    }
    return true;
  }

  clear(): void {
    this.counters.fill(0);
    this.elementCount = 0;
  }
  getSize(): number {
    return this.size;
  }
  getHashFunctionCount(): number {
    return this.hashFunctions;
  }
  getElementCount(): number {
    return this.elementCount;
  }
  getFillRatio(): number {
    let nonZeroCount = 0;
    for (let i = 0; i < this.counters.length; i++) {
      if (this.counters[i] > 0) {
        nonZeroCount++;
      }
    }
    return nonZeroCount / this.size;
  }

  getEstimatedFalsePositiveProbability(): number {
    const nonZeroCount = this.counters.filter((c) => c > 0).length;
    const exponent = (-this.hashFunctions * nonZeroCount) / this.size;
    const term = Math.pow(1 - Math.exp(exponent), this.hashFunctions);
    return Math.min(1, term);
  }
  private getHashes(element: string): number[] {
    const hashes: number[] = [];
    for (let i = 0; i < this.hashFunctions; i++) {
      let hash = i;
      for (let j = 0; j < element.length; j++) {
        hash = (hash << 5) - hash + element.charCodeAt(j);
        hash = hash & hash;
      }
      hashes.push(hash);
    }
    return hashes;
  }
}
