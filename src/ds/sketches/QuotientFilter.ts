export class QuotientFilter {
  private slots: Array<{
    quotient: number;
    remainder: number;
    occupied: boolean;
    shifted: boolean;
  }>;
  private occupied: Uint8Array;
  private runEnd: Uint8Array;
  private size: number = 0;
  private capacity: number;

  constructor(capacityBits: number = 16) {
    if (capacityBits < 4 || capacityBits > 20) {
      throw new Error("Capacity bits must be between 4 and 20");
    }
    this.capacity = 1 << capacityBits;
    this.slots = Array.from({ length: this.capacity }, () => ({
      quotient: 0,
      remainder: 0,
      occupied: false,
      shifted: false,
    }));

    this.occupied = new Uint8Array((this.capacity + 7) >> 3);
    this.runEnd = new Uint8Array((this.capacity + 7) >> 3);
  }

  insert(item: string): void {
    const hash = this.hash(item);
    const q = Math.floor(hash / this.capacity);
    const r = hash % this.capacity;
    const index = q % this.capacity;

    for (let i = 0; i < this.capacity; i++) {
      if (this.getBit(this.occupied, (index + i) % this.capacity)) {
        // _numRuns++;
      }
    }

    let insertIndex = index;
    for (let i = 0; i < this.capacity; i++) {
      const pos = (index + i) % this.capacity;
      if (!this.slots[pos].occupied) {
        insertIndex = pos;
        break;
      }
    }

    this.slots[insertIndex].quotient = q;
    this.slots[insertIndex].remainder = r;
    this.slots[insertIndex].occupied = true;
    this.setBit(this.occupied, insertIndex);
    this.size++;
  }

  mayContain(item: string): boolean {
    const hash = this.hash(item);
    const q = Math.floor(hash / this.capacity);
    const r = hash % this.capacity;
    const index = q % this.capacity;

    for (let i = 0; i < this.capacity; i++) {
      const pos = (index + i) % this.capacity;
      const slot = this.slots[pos];
      if (!slot.occupied) {
        return false;
      }
      if (slot.quotient === q && slot.remainder === r) {
        return true;
      }
      if (this.getBit(this.runEnd, pos)) {
        return false;
      }
    }
    return false;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }

  clear(): void {
    this.slots.forEach((slot) => {
      slot.occupied = false;
      slot.shifted = false;
    });
    this.occupied.fill(0);
    this.runEnd.fill(0);
    this.size = 0;
  }

  isFull(): boolean {
    return this.size >= this.capacity;
  }

  getMemoryUsage(): number {
    return this.capacity * 12 + (this.occupied.length + this.runEnd.length);
  }

  private hash(item: string): number {
    let hash = 0;
    for (let i = 0; i < item.length; i++) {
      hash = (hash << 5) - hash + item.charCodeAt(i);
    }
    return Math.abs(hash);
  }

  private getBit(array: Uint8Array, pos: number): boolean {
    const byteIndex = pos >> 3;
    const bitIndex = pos & 7;
    return (array[byteIndex] & (1 << bitIndex)) !== 0;
  }

  private setBit(array: Uint8Array, pos: number): void {
    const byteIndex = pos >> 3;
    const bitIndex = pos & 7;
    array[byteIndex] |= 1 << bitIndex;
  }

  private clearBit(array: Uint8Array, pos: number): void {
    const byteIndex = pos >> 3;
    const bitIndex = pos & 7;
    array[byteIndex] &= ~(1 << bitIndex);
  }
}
