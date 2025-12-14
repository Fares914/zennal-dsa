enum Color {
  RED = "RED",
  BLACK = "BLACK",
}
interface RBNode<T> {
  value: T;
  left: RBNode<T> | null;
  right: RBNode<T> | null;
  parent: RBNode<T> | null;
  color: Color;
}

export class RedBlackTree<T> {
  private root: RBNode<T> | null = null;
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
        this.root = {
          value,
          left: null,
          right: null,
          parent: null,
          color: Color.BLACK,
        };
      } else {
        const newNode = this.insertNode(this.root, value);
        if (newNode === null) {
          allInserted = false;
        } else {
          this.fixInsert(newNode);
        }
      }
    }
    return allInserted;
  }
  private insertNode(
    node: RBNode<T>,
    value: T,
  ): RBNode<T> | null {
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      if (node.left === null) {
        const newNode: RBNode<T> = {
          value,
          left: null,
          right: null,
          parent: node,
          color: Color.RED,
        };
        node.left = newNode;
        return newNode;
      }
      return this.insertNode(node.left, value);
    } else if (cmp > 0) {
      if (node.right === null) {
        const newNode: RBNode<T> = {
          value,
          left: null,
          right: null,
          parent: node,
          color: Color.RED,
        };
        node.right = newNode;
        return newNode;
      }
      return this.insertNode(node.right, value);
    }
    return null;
  }
  private fixInsert(node: RBNode<T>): void {
    let current = node;
    while (
      current !== this.root &&
      current.parent &&
      this.isRed(current.parent)
    ) {
      if (current.parent === current.parent.parent?.left) {
        const uncle = current.parent.parent?.right;
        if (this.isRed(uncle)) {
          this.setColor(current.parent, Color.BLACK);
          this.setColor(uncle, Color.BLACK);
          this.setColor(current.parent.parent, Color.RED);
          current = current.parent.parent!;
        } else {
          if (current === current.parent.right) {
            current = current.parent;
            this.rotateLeft(current);
          }

          this.setColor(current.parent, Color.BLACK);
          if (current.parent && current.parent.parent) {
            this.setColor(current.parent.parent, Color.RED);
            this.rotateRight(current.parent.parent);
          }
        }
      } else {
        const uncle =
          current.parent && current.parent.parent
            ? current.parent.parent.left
            : null;
        if (this.isRed(uncle)) {
          this.setColor(current.parent, Color.BLACK);
          this.setColor(uncle, Color.BLACK);
          if (current.parent && current.parent.parent) {
            this.setColor(current.parent.parent, Color.RED);
            current = current.parent.parent;
          }
        } else {
          if (current === current.parent.left) {
            current = current.parent;
            this.rotateRight(current);
          }

          this.setColor(current.parent, Color.BLACK);
          if (current.parent && current.parent.parent) {
            this.setColor(current.parent.parent, Color.RED);
            this.rotateLeft(current.parent.parent);
          }
        }
      }
    }
    this.setColor(this.root, Color.BLACK);
  }

  delete(value: T): boolean {
    const node = this.findNode(this.root, value);
    if (node === null) return false;
    this.deleteNode(node);
    return true;
  }
  private deleteNode(node: RBNode<T>): void {
    let nodeToFix: RBNode<T> | null;
    let nodeToFixParent: RBNode<T> | null;

    if (node.left !== null && node.right !== null) {
      const successor = this.findMinNode(node.right);
      node.value = successor.value;
      node = successor;
    }

    const child = node.left ?? node.right;
    if (child !== null) {
      child.parent = node.parent;
    }
    if (node === this.root) {
      this.root = child;
    } else if (node === node.parent!.left) {
      node.parent!.left = child;
    } else {
      node.parent!.right = child;
    }

    if (node.color === Color.BLACK) {
      nodeToFix = child;
      nodeToFixParent = node.parent;
      if (nodeToFix === null && nodeToFixParent !== null) {
        this.fixDeleteNull(nodeToFixParent);
      } else if (nodeToFix !== null) {
        this.fixDelete(nodeToFix);
      }
    }
  }
  private fixDeleteNull(node: RBNode<T>): void {
    let current = node;
    while (current !== this.root) {
      if (current.left === null && this.isBlack(current.right)) {
        this.fixDeleteHelper(current, true);
        break;
      } else if (current.right === null && this.isBlack(current.left)) {
        this.fixDeleteHelper(current, false);
        break;
      }
      if (current.parent === null) break;
      current = current.parent;
    }
  }
  private fixDelete(node: RBNode<T>): void {
    let current = node;
    while (current !== this.root && this.isBlack(current)) {
      if (current === current.parent!.left) {
        const sibling = current.parent!.right;
        if (this.isRed(sibling)) {
          this.setColor(sibling, Color.BLACK);
          this.setColor(current.parent, Color.RED);
          this.rotateLeft(current.parent!);
        }
        const sibling2 = current.parent!.right;
        if (
          sibling2 &&
          this.isBlack(sibling2.left) &&
          this.isBlack(sibling2.right)
        ) {
          this.setColor(sibling2, Color.RED);
          current = current.parent!;
        } else if (sibling2) {
          if (this.isBlack(sibling2.right)) {
            this.setColor(sibling2.left, Color.BLACK);
            this.setColor(sibling2, Color.RED);
            this.rotateRight(sibling2);
          }

          this.setColor(current.parent!, this.getColor(current.parent!));
          this.setColor(current.parent, Color.BLACK);
          this.setColor(current.parent!.right!.right, Color.BLACK);
          this.rotateLeft(current.parent!);
          current = this.root!;
        }
      } else {
        const sibling = current.parent!.left;
        if (this.isRed(sibling)) {
          this.setColor(sibling, Color.BLACK);
          this.setColor(current.parent, Color.RED);
          this.rotateRight(current.parent!);
        }
        const sibling2 = current.parent!.left;
        if (
          sibling2 &&
          this.isBlack(sibling2.left) &&
          this.isBlack(sibling2.right)
        ) {
          this.setColor(sibling2, Color.RED);
          current = current.parent!;
        } else if (sibling2) {
          if (this.isBlack(sibling2.left)) {
            this.setColor(sibling2.right, Color.BLACK);
            this.setColor(sibling2, Color.RED);
            this.rotateLeft(sibling2);
          }

          this.setColor(current.parent!, this.getColor(current.parent!));
          this.setColor(current.parent, Color.BLACK);
          this.setColor(current.parent!.left!.left, Color.BLACK);
          this.rotateRight(current.parent!);
          current = this.root!;
        }
      }
    }
    this.setColor(current, Color.BLACK);
  }
  private fixDeleteHelper(node: RBNode<T>, isLeftChild: boolean): void {
    let current = node;
    while (current !== this.root) {
      if (isLeftChild) {
        const sibling = current.right;
        if (this.isRed(sibling)) {
          this.setColor(sibling, Color.BLACK);
          this.setColor(current, Color.RED);
          this.rotateLeft(current);
        }
        const sibling2 = current.right;
        if (
          sibling2 &&
          this.isBlack(sibling2.left) &&
          this.isBlack(sibling2.right)
        ) {
          this.setColor(sibling2, Color.RED);
          current = current.parent!;
          isLeftChild = current.left === null;
        } else if (sibling2) {
          if (this.isBlack(sibling2.right)) {
            this.setColor(sibling2.left, Color.BLACK);
            this.setColor(sibling2, Color.RED);
            this.rotateRight(sibling2);
          }
          this.setColor(current.right!, this.getColor(current));
          this.setColor(current, Color.BLACK);
          this.setColor(current.right!.right, Color.BLACK);
          this.rotateLeft(current);
          break;
        }
      } else {
        const sibling = current.left;
        if (this.isRed(sibling)) {
          this.setColor(sibling, Color.BLACK);
          this.setColor(current, Color.RED);
          this.rotateRight(current);
        }
        const sibling2 = current.left;
        if (
          sibling2 &&
          this.isBlack(sibling2.left) &&
          this.isBlack(sibling2.right)
        ) {
          this.setColor(sibling2, Color.RED);
          current = current.parent!;
          isLeftChild = current.left === null;
        } else if (sibling2) {
          if (this.isBlack(sibling2.left)) {
            this.setColor(sibling2.right, Color.BLACK);
            this.setColor(sibling2, Color.RED);
            this.rotateLeft(sibling2);
          }
          this.setColor(current.left!, this.getColor(current));
          this.setColor(current, Color.BLACK);
          this.setColor(current.left!.left, Color.BLACK);
          this.rotateRight(current);
          break;
        }
      }
    }
  }
  private rotateLeft(node: RBNode<T>): void {
    if (!node.right) return;
    const right = node.right;
    node.right = right.left;
    if (right.left !== null) {
      right.left.parent = node;
    }
    right.parent = node.parent;
    if (node.parent === null) {
      this.root = right;
    } else if (node === node.parent.left) {
      node.parent.left = right;
    } else {
      node.parent.right = right;
    }
    right.left = node;
    node.parent = right;
  }
  private rotateRight(node: RBNode<T>): void {
    if (!node.left) return;
    const left = node.left;
    node.left = left.right;
    if (left.right !== null) {
      left.right.parent = node;
    }
    left.parent = node.parent;
    if (node.parent === null) {
      this.root = left;
    } else if (node === node.parent.right) {
      node.parent.right = left;
    } else {
      node.parent.left = left;
    }
    left.right = node;
    node.parent = left;
  }

  search(value: T): boolean {
    return this.findNode(this.root, value) !== null;
  }
  private findNode(node: RBNode<T> | null, value: T): RBNode<T> | null {
    if (node === null) return null;
    const cmp = this.compareFn(value, node.value);
    if (cmp < 0) {
      return this.findNode(node.left, value);
    } else if (cmp > 0) {
      return this.findNode(node.right, value);
    }
    return node;
  }

  findMin(): T | undefined {
    if (this.root === null) return undefined;
    return this.findMinNode(this.root).value;
  }
  private findMinNode(node: RBNode<T>): RBNode<T> {
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
  private findMaxNode(node: RBNode<T>): RBNode<T> {
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
  private inOrderTraversal(node: RBNode<T> | null, result: T[]): void {
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
  private preOrderTraversal(node: RBNode<T> | null, result: T[]): void {
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
  private postOrderTraversal(node: RBNode<T> | null, result: T[]): void {
    if (node === null) return;
    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
  }

  height(): number {
    return this.heightHelper(this.root);
  }
  private heightHelper(node: RBNode<T> | null): number {
    if (node === null) return -1;
    return (
      1 + Math.max(this.heightHelper(node.left), this.heightHelper(node.right))
    );
  }

  blackHeight(): number {
    let count = 0;
    let node = this.root;
    while (node !== null) {
      if (this.isBlack(node)) {
        count++;
      }
      node = node.left;
    }
    return count;
  }

  size(): number {
    return this.sizeHelper(this.root);
  }
  private sizeHelper(node: RBNode<T> | null): number {
    if (node === null) return 0;
    return 1 + this.sizeHelper(node.left) + this.sizeHelper(node.right);
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  clear(): void {
    this.root = null;
  }

  isValidRB(): boolean {
    if (this.root === null) return true;

    if (this.isRed(this.root)) return false;

    const blackHeights = new Map<RBNode<T> | null, number>();
    return this.isValidRBHelper(this.root, 0, blackHeights);
  }
  private isValidRBHelper(
    node: RBNode<T> | null,
    blackCount: number,
    blackHeights: Map<RBNode<T> | null, number>,
  ): boolean {
    if (node === null) {
      if (!blackHeights.has(null)) {
        blackHeights.set(null, blackCount);
      }
      return blackHeights.get(null) === blackCount;
    }

    if (this.isRed(node)) {
      if (this.isRed(node.left) || this.isRed(node.right)) {
        return false;
      }
    }
    const newBlackCount = blackCount + (this.isBlack(node) ? 1 : 0);
    return (
      this.isValidRBHelper(node.left, newBlackCount, blackHeights) &&
      this.isValidRBHelper(node.right, newBlackCount, blackHeights)
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
    node: RBNode<T> | null,
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
    const queue: RBNode<T>[] = [this.root];
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
  private getColor(node: RBNode<T> | null): Color {
    return node === null ? Color.BLACK : node.color;
  }
  private isRed(node: RBNode<T> | null): boolean {
    return node !== null && node.color === Color.RED;
  }
  private isBlack(node: RBNode<T> | null): boolean {
    return node === null || node.color === Color.BLACK;
  }
  private setColor(node: RBNode<T> | null, color: Color): void {
    if (node !== null) {
      node.color = color;
    }
  }

  findSuccessor(value: T): T | undefined {
    const node = this.findNode(this.root, value);
    if (node === null) return undefined;
    if (node.right !== null) {
      return this.findMinNode(node.right).value;
    }
    let successor: RBNode<T> | null = null;
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
    const node = this.findNode(this.root, value);
    if (node === null) return undefined;
    if (node.left !== null) {
      return this.findMaxNode(node.left).value;
    }
    let predecessor: RBNode<T> | null = null;
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
}
