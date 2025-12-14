export class DisjointSet<T> {
  private parent: Map<T, T>;
  private rank: Map<T, number>;
  private size: Map<T, number>;

  constructor() {
    this.parent = new Map();
    this.rank = new Map();
    this.size = new Map();
  }

  makeSet(...elements: T[]): void {
    for (const element of elements) {
      if (!this.parent.has(element)) {
        this.parent.set(element, element);
        this.rank.set(element, 0);
        this.size.set(element, 1);
      }
    }
  }

  find(element: T): T | null {
    if (!this.parent.has(element)) {
      return null;
    }
    const parent = this.parent.get(element)!;

    if (parent !== element) {
      this.parent.set(element, this.find(parent)!);
    }
    return this.parent.get(element)!;
  }

  union(elem1: T, elem2: T): boolean {
    if (!this.parent.has(elem1)) {
      this.makeSet(elem1);
    }
    if (!this.parent.has(elem2)) {
      this.makeSet(elem2);
    }
    const root1 = this.find(elem1)!;
    const root2 = this.find(elem2)!;

    if (root1 === root2) {
      return false;
    }

    const rank1 = this.rank.get(root1)!;
    const rank2 = this.rank.get(root2)!;
    let newRoot: T;
    let newChild: T;
    if (rank1 < rank2) {
      newRoot = root2;
      newChild = root1;
    } else if (rank1 > rank2) {
      newRoot = root1;
      newChild = root2;
    } else {
      newRoot = root1;
      newChild = root2;
      this.rank.set(newRoot, rank1 + 1);
    }
    this.parent.set(newChild, newRoot);

    const size1 = this.size.get(newRoot)!;
    const size2 = this.size.get(newChild)!;
    this.size.set(newRoot, size1 + size2);
    return true;
  }

  connected(elem1: T, elem2: T): boolean {
    if (!this.parent.has(elem1) || !this.parent.has(elem2)) {
      return false;
    }
    return this.find(elem1) === this.find(elem2);
  }

  getSetSize(element: T): number {
    const root = this.find(element);
    if (root === null) {
      return 0;
    }
    return this.size.get(root)!;
  }

  getNumSets(): number {
    const roots = new Set<T>();
    for (const [element] of this.parent) {
      roots.add(this.find(element)!);
    }
    return roots.size;
  }

  getSet(element: T): T[] {
    const root = this.find(element);
    if (root === null) {
      return [];
    }
    const result: T[] = [];
    for (const [elem] of this.parent) {
      if (this.find(elem) === root) {
        result.push(elem);
      }
    }
    return result;
  }

  getAllSets(): T[][] {
    const setMap = new Map<T, T[]>();
    for (const [element] of this.parent) {
      const root = this.find(element)!;
      if (!setMap.has(root)) {
        setMap.set(root, []);
      }
      setMap.get(root)!.push(element);
    }
    return Array.from(setMap.values());
  }

  has(element: T): boolean {
    return this.parent.has(element);
  }

  count(): number {
    return this.parent.size;
  }

  clear(): void {
    this.parent.clear();
    this.rank.clear();
    this.size.clear();
  }

  getTreeHeight(element: T): number {
    const root = this.find(element);
    if (root === null) {
      return 0;
    }
    let height = 0;
    for (const [elem] of this.parent) {
      if (this.find(elem) === root) {
        let current = elem;
        let depth = 0;
        while (this.parent.get(current) !== current) {
          current = this.parent.get(current)!;
          depth++;
        }
        height = Math.max(height, depth);
      }
    }
    return height;
  }

  unite(elem1: T, elem2: T): boolean {
    return this.union(elem1, elem2);
  }

  getAllElements(): T[] {
    return Array.from(this.parent.keys());
  }

  getRepresentative(element: T): T | null {
    return this.find(element);
  }

  validate(): boolean {
    for (const [, parent] of this.parent) {
      if (!this.parent.has(parent)) {
        return false;
      }
    }

    for (const [elem] of this.parent) {
      let current = elem;
      let visited = 0;
      while (this.parent.get(current) !== current) {
        current = this.parent.get(current)!;
        visited++;
        if (visited > this.parent.size) {
          return false;
        }
      }
    }
    return true;
  }
}
