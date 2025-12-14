class CartesianNode<T> {
  value: T;
  left: CartesianNode<T> | null = null;
  right: CartesianNode<T> | null = null;
  priority: number;
  size: number = 1;

  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

export class CartesianTree<T> {
  private root: CartesianNode<T> | null = null;
  private comparator: (a: T, b: T) => number;

  constructor(comparator?: (a: T, b: T) => number) {
    this.comparator =
      comparator ||
      ((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
  }

  buildFromArray(arr: T[]): void {
    this.root = null;
    for (const value of arr) {
      this.insert(value);
    }
  }

  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  findMin(): T | undefined {
    return this.root?.value;
  }

  findMax(): T | undefined {
    if (!this.root) return undefined;
    let max = this.root.value;
    const traverse = (node: CartesianNode<T> | null): void => {
      if (!node) return;

      if (this.comparator(max, node.value) > 0) {
        max = node.value;
      }
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root.left);
    traverse(this.root.right);
    return max;
  }

  findKth(k: number): T | undefined {
    if (k < 1 || !this.root || k > this.root.size) {
      return undefined;
    }
    let current: CartesianNode<T> | null = this.root;
    let rank = k;
    while (current) {
      const leftSize = current.left?.size || 0;
      if (rank === leftSize + 1) {
        return current.value;
      }
      if (rank <= leftSize) {
        current = current.left ?? null;
      } else {
        rank -= leftSize + 1;
        current = current.right ?? null;
      }
    }
    return undefined;
  }

  rangeQuery(l: number, r: number): T | undefined {
    if (!this.root || l > r || l < 1 || r > this.root.size) {
      return undefined;
    }
    return this.rangeQueryNode(this.root, l, r, 1)?.value;
  }

  inOrder(): T[] {
    const result: T[] = [];
    this.inOrderTraverse(this.root, result);
    return result;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  size(): number {
    return this.root?.size || 0;
  }

  clear(): void {
    this.root = null;
  }

  private updateSize(node: CartesianNode<T> | null): void {
    if (!node) return;
    node.size = 1;
    if (node.left) node.size += node.left.size;
    if (node.right) node.size += node.right.size;
  }

  private insertNode(
    node: CartesianNode<T> | null,
    value: T,
  ): CartesianNode<T> {
    if (!node) {
      return new CartesianNode(value, Math.random());
    }
    const cmp = this.comparator(value, node.value);
    if (cmp < 0) {
      const left = this.insertNode(node.left, value);

      if (this.comparator(left.value, node.value) < 0) {
        node.left = left.right;
        left.right = node;
        this.updateSize(node);
        this.updateSize(left);
        return left;
      }
      node.left = left;
    } else {
      const right = this.insertNode(node.right, value);

      if (this.comparator(right.value, node.value) < 0) {
        node.right = right.left;
        right.left = node;
        this.updateSize(node);
        this.updateSize(right);
        return right;
      }
      node.right = right;
    }
    this.updateSize(node);
    return node;
  }

  private rangeQueryNode(
    node: CartesianNode<T> | null,
    l: number,
    r: number,
    pos: number,
  ): CartesianNode<T> | null {
    if (!node || pos > r || pos + (node.size - 1) < l) {
      return null;
    }
    const leftSize = node.left?.size || 0;
    const nodePos = pos + leftSize;
    if (l <= nodePos && nodePos <= r) {
      const leftResult = this.rangeQueryNode(node.left, l, r, pos);
      const rightResult = this.rangeQueryNode(node.right, l, r, nodePos + 1);
      let result = node;
      if (leftResult && this.comparator(leftResult.value, result.value) < 0) {
        result = leftResult;
      }
      if (rightResult && this.comparator(rightResult.value, result.value) < 0) {
        result = rightResult;
      }
      return result;
    }
    const leftResult = this.rangeQueryNode(node.left, l, r, pos);
    if (leftResult) return leftResult;
    return this.rangeQueryNode(node.right, l, r, nodePos + 1);
  }

  private inOrderTraverse(node: CartesianNode<T> | null, result: T[]): void {
    if (!node) return;
    this.inOrderTraverse(node.left, result);
    result.push(node.value);
    this.inOrderTraverse(node.right, result);
  }
}
