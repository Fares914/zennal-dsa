interface BSTNode<T> {
  value: T;
  left: BSTNode<T> | null;
  right: BSTNode<T> | null;
}

export class BinarySearchTree<T> {
  private root: BSTNode<T> | null = null;
  private compareFn: (a: T, b: T) => number;

  constructor(compareFn?: (a: T, b: T) => number) {
    this.compareFn = compareFn || this.defaultCompare;
  }
  private defaultCompare = (a: T, b: T): number => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  insert(...values: T[]): boolean {
    let allInserted = true;
    for (const value of values) {
      if (this.root === null) {
        this.root = { value, left: null, right: null };
      } else {
        if (!this.insertNode(this.root, value)) {
          allInserted = false;
        }
      }
    }
    return allInserted;
  }
  private insertNode(node: BSTNode<T>, value: T): boolean {
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      if (node.left === null) {
        node.left = { value, left: null, right: null };
        return true;
      }
      return this.insertNode(node.left, value);
    } else if (cmp > 0) {
      if (node.right === null) {
        node.right = { value, left: null, right: null };
        return true;
      }
      return this.insertNode(node.right, value);
    }
    return false;
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  contains(value: T): boolean {
    return this.search(value);
  }
  private searchNode(node: BSTNode<T> | null, value: T): boolean {
    if (node === null) return false;
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      return this.searchNode(node.left, value);
    } else if (cmp > 0) {
      return this.searchNode(node.right, value);
    }
    return true;
  }

  delete(value: T): boolean {
    const initialSize = this.size();
    this.root = this.deleteNode(this.root, value);
    return this.size() < initialSize;
  }
  private deleteNode(node: BSTNode<T> | null, value: T): BSTNode<T> | null {
    if (node === null) return null;
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      node.left = this.deleteNode(node.left, value);
    } else if (cmp > 0) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }

      const minNode = this.findMinNode(node.right);
      node.value = minNode.value;
      node.right = this.deleteNode(node.right, minNode.value);
    }
    return node;
  }

  findMin(): T | undefined {
    if (this.root === null) return undefined;
    return this.findMinNode(this.root).value;
  }
  private findMinNode(node: BSTNode<T>): BSTNode<T> {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  findMax(): T | undefined {
    if (this.root === null) return undefined;
    return this.findMaxNode(this.root).value;
  }
  private findMaxNode(node: BSTNode<T>): BSTNode<T> {
    let current = node;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }

  inOrder(): T[] {
    const result: T[] = [];
    this.inOrderTraversal(this.root, result);
    return result;
  }
  private inOrderTraversal(node: BSTNode<T> | null, result: T[]): void {
    if (node === null) return;
    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    this.inOrderTraversal(node.right, result);
  }

  preOrder(): T[] {
    const result: T[] = [];
    this.preOrderTraversal(this.root, result);
    return result;
  }
  private preOrderTraversal(node: BSTNode<T> | null, result: T[]): void {
    if (node === null) return;
    result.push(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
  }

  postOrder(): T[] {
    const result: T[] = [];
    this.postOrderTraversal(this.root, result);
    return result;
  }
  private postOrderTraversal(node: BSTNode<T> | null, result: T[]): void {
    if (node === null) return;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
  }

  height(): number {
    return this.heightHelper(this.root);
  }
  private heightHelper(node: BSTNode<T> | null): number {
    if (node === null) return -1;
    return (
      1 + Math.max(this.heightHelper(node.left), this.heightHelper(node.right))
    );
  }

  size(): number {
    return this.sizeHelper(this.root);
  }
  private sizeHelper(node: BSTNode<T> | null): number {
    if (node === null) return 0;
    return 1 + this.sizeHelper(node.left) + this.sizeHelper(node.right);
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  clear(): void {
    this.root = null;
  }

  findLCA(value1: T, value2: T): T | undefined {
    if (!this.search(value1) || !this.search(value2)) {
      return undefined;
    }
    return this.findLCANode(this.root, value1, value2)?.value;
  }
  private findLCANode(
    node: BSTNode<T> | null,
    value1: T,
    value2: T,
  ): BSTNode<T> | null {
    if (node === null) return null;
    const cmp1 = this.compareFn(value1, node.value);
    const cmp2 = this.compareFn(value2, node.value);

    if (cmp1 < 0 && cmp2 < 0) {
      return this.findLCANode(node.left, value1, value2);
    }

    if (cmp1 > 0 && cmp2 > 0) {
      return this.findLCANode(node.right, value1, value2);
    }

    return node;
  }

  findSuccessor(value: T): T | undefined {
    const node = this.findNodeByValue(this.root, value);
    if (node === null) return undefined;
    if (node.right !== null) {
      return this.findMinNode(node.right).value;
    }

    let successor: BSTNode<T> | null = null;
    let current = this.root;
    while (current !== null) {
      if (this.compareFn(value, current.value) < 0) {
        successor = current;
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return successor?.value;
  }

  findPredecessor(value: T): T | undefined {
    const node = this.findNodeByValue(this.root, value);
    if (node === null) return undefined;
    if (node.left !== null) {
      return this.findMaxNode(node.left).value;
    }

    let predecessor: BSTNode<T> | null = null;
    let current = this.root;
    while (current !== null) {
      if (this.compareFn(value, current.value) > 0) {
        predecessor = current;
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return predecessor?.value;
  }
  private findNodeByValue(
    node: BSTNode<T> | null,
    value: T,
  ): BSTNode<T> | null {
    if (node === null) return null;
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      return this.findNodeByValue(node.left, value);
    } else if (cmp > 0) {
      return this.findNodeByValue(node.right, value);
    }
    return node;
  }

  isValidBST(): boolean {
    return this.isValidBSTHelper(this.root, undefined, undefined);
  }
  private isValidBSTHelper(
    node: BSTNode<T> | null,
    min: T | undefined,
    max: T | undefined,
  ): boolean {
    if (node === null) return true;
    if (min !== undefined && this.compareFn(node.value, min) <= 0) {
      return false;
    }
    if (max !== undefined && this.compareFn(node.value, max) >= 0) {
      return false;
    }
    return (
      this.isValidBSTHelper(node.left, min, node.value) &&
      this.isValidBSTHelper(node.right, node.value, max)
    );
  }

  toArray(): T[] {
    return this.inOrder();
  }

  rangeQuery(min: T, max: T): T[] {
    const result: T[] = [];
    this.rangeQueryHelper(this.root, min, max, result);
    return result;
  }
  private rangeQueryHelper(
    node: BSTNode<T> | null,
    min: T,
    max: T,
    result: T[],
  ): void {
    if (node === null) return;
    const cmpMin = this.compareFn(node.value, min);
    const cmpMax = this.compareFn(node.value, max);

    if (cmpMin > 0) {
      this.rangeQueryHelper(node.left, min, max, result);
    }

    if (cmpMin >= 0 && cmpMax <= 0) {
      result.push(node.value);
    }

    if (cmpMax < 0) {
      this.rangeQueryHelper(node.right, min, max, result);
    }
  }

  levelOrder(): T[] {
    if (this.root === null) return [];
    const result: T[] = [];
    const queue: BSTNode<T>[] = [this.root];
    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    return result;
  }
}
