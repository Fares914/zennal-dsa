interface AVLNode<T> {
  value: T;
  left: AVLNode<T> | null;
  right: AVLNode<T> | null;
  height: number;
}

export class AVLTree<T> {
  private root: AVLNode<T> | null = null;
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
      const initialSize = this.size();
      this.root = this.insertNode(this.root, value);
      if (!(this.size() > initialSize)) {
        allInserted = false;
      }
    }
    return allInserted;
  }
  private insertNode(node: AVLNode<T> | null, value: T): AVLNode<T> {
    if (node === null) {
      return { value, left: null, right: null, height: 0 };
    }
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      node.left = this.insertNode(node.left, value);
    } else if (cmp > 0) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    return this.balance(node);
  }

  delete(value: T): boolean {
    const initialSize = this.size();
    this.root = this.deleteNode(this.root, value);
    return this.size() < initialSize;
  }
  private deleteNode(node: AVLNode<T> | null, value: T): AVLNode<T> | null {
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
    if (node === null) return null;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    return this.balance(node);
  }
  private getHeight(node: AVLNode<T> | null): number {
    return node === null ? -1 : node.height;
  }
  private calculateBalanceFactor(node: AVLNode<T> | null): number {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }
  private balance(node: AVLNode<T>): AVLNode<T> {
    const balanceFactor = this.calculateBalanceFactor(node);

    if (balanceFactor > 1) {
      if (this.calculateBalanceFactor(node.left) < 0) {
        node.left = this.rotateLeft(node.left!);
      }

      return this.rotateRight(node);
    }

    if (balanceFactor < -1) {
      if (this.calculateBalanceFactor(node.right) > 0) {
        node.right = this.rotateRight(node.right!);
      }

      return this.rotateLeft(node);
    }

    return node;
  }
  private rotateLeft(node: AVLNode<T>): AVLNode<T> {
    if (!node.right) {
      return node;
    }
    const right = node.right;
    node.right = right.left;
    right.left = node;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    right.height =
      1 + Math.max(this.getHeight(right.left), this.getHeight(right.right));
    return right;
  }
  private rotateRight(node: AVLNode<T>): AVLNode<T> {
    if (!node.left) {
      return node;
    }
    const left = node.left;
    node.left = left.right;
    left.right = node;

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    left.height =
      1 + Math.max(this.getHeight(left.left), this.getHeight(left.right));
    return left;
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  contains(value: T): boolean {
    return this.search(value);
  }
  private searchNode(node: AVLNode<T> | null, value: T): boolean {
    if (node === null) return false;
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      return this.searchNode(node.left, value);
    } else if (cmp > 0) {
      return this.searchNode(node.right, value);
    }
    return true;
  }

  findMin(): T | undefined {
    if (this.root === null) return undefined;
    return this.findMinNode(this.root).value;
  }
  private findMinNode(node: AVLNode<T>): AVLNode<T> {
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
  private findMaxNode(node: AVLNode<T>): AVLNode<T> {
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
  private inOrderTraversal(node: AVLNode<T> | null, result: T[]): void {
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
  private preOrderTraversal(node: AVLNode<T> | null, result: T[]): void {
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
  private postOrderTraversal(node: AVLNode<T> | null, result: T[]): void {
    if (node === null) return;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
  }

  height(): number {
    return this.getHeight(this.root);
  }

  size(): number {
    return this.sizeHelper(this.root);
  }
  private sizeHelper(node: AVLNode<T> | null): number {
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
    node: AVLNode<T> | null,
    value1: T,
    value2: T,
  ): AVLNode<T> | null {
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

    let successor: AVLNode<T> | null = null;
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

    let predecessor: AVLNode<T> | null = null;
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
    node: AVLNode<T> | null,
    value: T,
  ): AVLNode<T> | null {
    if (node === null) return null;
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      return this.findNodeByValue(node.left, value);
    } else if (cmp > 0) {
      return this.findNodeByValue(node.right, value);
    }
    return node;
  }

  isValidAVL(): boolean {
    return this.isValidAVLHelper(this.root, undefined, undefined).valid;
  }
  private isValidAVLHelper(
    node: AVLNode<T> | null,
    min: T | undefined,
    max: T | undefined,
  ): { valid: boolean; height: number } {
    if (node === null) {
      return { valid: true, height: -1 };
    }

    if (min !== undefined && this.compareFn(node.value, min) <= 0) {
      return { valid: false, height: -1 };
    }
    if (max !== undefined && this.compareFn(node.value, max) >= 0) {
      return { valid: false, height: -1 };
    }

    const leftResult = this.isValidAVLHelper(node.left, min, node.value);
    if (!leftResult.valid) return { valid: false, height: -1 };
    const rightResult = this.isValidAVLHelper(node.right, node.value, max);
    if (!rightResult.valid) return { valid: false, height: -1 };

    const balanceFactor = leftResult.height - rightResult.height;
    if (Math.abs(balanceFactor) > 1) {
      return { valid: false, height: -1 };
    }

    const expectedHeight = 1 + Math.max(leftResult.height, rightResult.height);
    if (node.height !== expectedHeight) {
      return { valid: false, height: -1 };
    }
    return { valid: true, height: expectedHeight };
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
    node: AVLNode<T> | null,
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
    const queue: AVLNode<T>[] = [this.root];
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

  getBalanceFactor(): number {
    if (this.root === null) return 0;
    return this.getHeight(this.root.left) - this.getHeight(this.root.right);
  }
}
