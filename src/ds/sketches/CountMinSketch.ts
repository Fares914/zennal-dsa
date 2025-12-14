export class CountMinSketch {
  private sketch: number[][];
  private width: number;
  private depth: number;
  private delta: number;
  private epsilon: number;

  constructor(delta: number = 0.01, epsilon: number = 0.01) {
    if (delta <= 0 || delta >= 1 || epsilon <= 0 || epsilon >= 1) {
      throw new Error("Delta and epsilon must be between 0 and 1");
    }
    this.delta = delta;
    this.epsilon = epsilon;

    this.width = Math.ceil(Math.E / epsilon);
    this.depth = Math.ceil(Math.log(1 / delta));

    this.sketch = Array.from({ length: this.depth }, () =>
      new Array(this.width).fill(0),
    );
  }

  update(item: string, count: number = 1): void {
    if (count < 0) {
      throw new Error("Count must be non-negative");
    }
    for (let i = 0; i < this.depth; i++) {
      const j = this.hash(item, i);
      this.sketch[i][j] += count;
    }
  }

  query(item: string): number {
    let minCount = Number.MAX_VALUE;
    for (let i = 0; i < this.depth; i++) {
      const j = this.hash(item, i);
      minCount = Math.min(minCount, this.sketch[i][j]);
    }
    return minCount;
  }

  merge(other: CountMinSketch): void {
    if (this.width !== other.width || this.depth !== other.depth) {
      throw new Error("Sketches must have same dimensions for merging");
    }
    for (let i = 0; i < this.depth; i++) {
      for (let j = 0; j < this.width; j++) {
        this.sketch[i][j] += other.sketch[i][j];
      }
    }
  }

  reset(): void {
    for (let i = 0; i < this.depth; i++) {
      this.sketch[i].fill(0);
    }
  }

  getParameters() {
    return {
      width: this.width,
      depth: this.depth,
      delta: this.delta,
      epsilon: this.epsilon,
    };
  }

  getMemoryUsage(): number {
    return this.width * this.depth * 8;
  }

  private hash(item: string, row: number): number {
    let hash = row;
    for (let i = 0; i < item.length; i++) {
      hash = (hash << 5) - hash + item.charCodeAt(i);
    }
    return Math.abs(hash) % this.width;
  }
}
