interface TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = {
      children: new Map(),
      isEndOfWord: false,
    };
  }

  insert(...words: string[]): void {
    for (const word of words) {
      if (word.length === 0) {
        continue;
      }
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, {
            children: new Map(),
            isEndOfWord: false,
          });
        }
        node = node.children.get(char)!;
      }
      node.isEndOfWord = true;
    }
  }

  search(word: string): boolean {
    const node = this.findNode(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  delete(word: string): boolean {
    return this.deleteHelper(this.root, word, 0);
  }

  wordsWithPrefix(prefix: string): string[] {
    const node = this.findNode(prefix);
    if (node === null) {
      return [];
    }
    const words: string[] = [];
    this.dfsCollectWords(node, prefix, words);
    return words;
  }

  getAllWords(): string[] {
    const words: string[] = [];
    this.dfsCollectWords(this.root, "", words);
    return words;
  }

  size(): number {
    return this.countWords(this.root);
  }

  isEmpty(): boolean {
    return this.root.children.size === 0;
  }

  clear(): void {
    this.root = {
      children: new Map(),
      isEndOfWord: false,
    };
  }

  longestCommonPrefix(): string {
    let prefix = "";
    let node = this.root;
    while (node.children.size === 1 && !node.isEndOfWord) {
      const [char, nextNode] = Array.from(node.children.entries())[0];
      prefix += char;
      node = nextNode;
    }
    return prefix;
  }

  autocomplete(prefix: string): string[] {
    const words = this.wordsWithPrefix(prefix);
    return words.sort((a, b) => {
      if (b.length !== a.length) {
        return b.length - a.length;
      }
      return a.localeCompare(b);
    });
  }

  isPrefix(word: string): boolean {
    const node = this.findNode(word);
    return node !== null && node.children.size > 0;
  }

  searchWithWildcard(pattern: string): string[] {
    const words: string[] = [];
    this.dfsSearchWildcard(this.root, pattern, 0, "", words);
    return words;
  }

  height(): number {
    if (this.root.children.size === 0) {
      return -1;
    }
    return this.getHeight(this.root) - 1;
  }

  private findNode(word: string): TrieNode | null {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return null;
      }
      node = node.children.get(char)!;
    }
    return node;
  }
  private deleteHelper(node: TrieNode, word: string, index: number): boolean {
    if (index === word.length) {
      if (!node.isEndOfWord) {
        return false;
      }
      node.isEndOfWord = false;
      return node.children.size === 0;
    }
    const char = word[index];
    if (!node.children.has(char)) {
      return false;
    }
    const child = node.children.get(char)!;
    const canDeleteChild = this.deleteHelper(child, word, index + 1);
    if (canDeleteChild) {
      node.children.delete(char);
      return node.children.size === 0 && !node.isEndOfWord;
    }
    return false;
  }
  private dfsCollectWords(
    node: TrieNode,
    current: string,
    words: string[],
  ): void {
    if (node.isEndOfWord) {
      words.push(current);
    }
    for (const [char, child] of node.children) {
      this.dfsCollectWords(child, current + char, words);
    }
  }
  private dfsSearchWildcard(
    node: TrieNode,
    pattern: string,
    index: number,
    current: string,
    words: string[],
  ): void {
    if (index === pattern.length) {
      if (node.isEndOfWord) {
        words.push(current);
      }
      return;
    }
    const char = pattern[index];
    if (char === ".") {
      for (const [nextChar, child] of node.children) {
        this.dfsSearchWildcard(
          child,
          pattern,
          index + 1,
          current + nextChar,
          words,
        );
      }
    } else {
      if (node.children.has(char)) {
        const child = node.children.get(char)!;
        this.dfsSearchWildcard(
          child,
          pattern,
          index + 1,
          current + char,
          words,
        );
      }
    }
  }
  private countWords(node: TrieNode): number {
    let count = node.isEndOfWord ? 1 : 0;
    for (const child of node.children.values()) {
      count += this.countWords(child);
    }
    return count;
  }
  private getHeight(node: TrieNode): number {
    if (node.children.size === 0) {
      return 0;
    }
    let maxHeight = 0;
    for (const child of node.children.values()) {
      maxHeight = Math.max(maxHeight, 1 + this.getHeight(child));
    }
    return maxHeight;
  }

  getNodeCount(): number {
    return this.countNodes(this.root);
  }
  private countNodes(node: TrieNode): number {
    let count = 1;
    for (const child of node.children.values()) {
      count += this.countNodes(child);
    }
    return count;
  }

  isValid(): boolean {
    return this.validateNode(this.root);
  }
  private validateNode(node: TrieNode): boolean {
    for (const child of node.children.values()) {
      if (!this.validateNode(child)) {
        return false;
      }
    }
    return true;
  }
}
