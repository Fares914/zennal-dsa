export class BinaryLifting {
  private n: number;
  private depth: number;
  private up: number[][];
  private depths: number[];
  private adj: number[][];

  constructor(n: number, edges: [number, number][], root: number = 0) {
    if (root < 0 || root >= n) {
      throw new Error("Invalid root node");
    }
    this.n = n;
    this.depth = Math.ceil(Math.log2(n)) + 1;
    this.up = Array.from({ length: n }, () => new Array(this.depth).fill(-1));
    this.depths = new Array(n).fill(0);
    this.adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
      if (u < 0 || u >= n || v < 0 || v >= n) {
        throw new Error("Invalid edge");
      }
      this.adj[u].push(v);
      this.adj[v].push(u);
    }

    this.dfs(root, -1, 0);
  }

  private dfs(node: number, parent: number, depth: number): void {
    this.depths[node] = depth;
    this.up[node][0] = parent;

    for (let j = 1; j < this.depth; j++) {
      if (this.up[node][j - 1] !== -1) {
        this.up[node][j] = this.up[this.up[node][j - 1]][j - 1];
      }
    }
    for (const child of this.adj[node]) {
      if (child !== parent) {
        this.dfs(child, node, depth + 1);
      }
    }
  }

  getKthAncestor(node: number, k: number): number {
    if (node < 0 || node >= this.n || k < 0) {
      throw new Error("Invalid input");
    }
    let current = node;
    const remaining = k;
    for (let j = 0; j < this.depth && remaining > 0; j++) {
      if ((remaining & (1 << j)) !== 0) {
        current = this.up[current][j];
        if (current === -1) {
          return -1;
        }
      }
    }
    return current;
  }

  getLCA(u: number, v: number): number {
    if (u < 0 || u >= this.n || v < 0 || v >= this.n) {
      throw new Error("Invalid node");
    }
    if (this.depths[u] < this.depths[v]) {
      [u, v] = [v, u];
    }

    const diff = this.depths[u] - this.depths[v];
    for (let j = 0; j < this.depth; j++) {
      if ((diff & (1 << j)) !== 0) {
        u = this.up[u][j];
      }
    }
    if (u === v) {
      return u;
    }

    for (let j = this.depth - 1; j >= 0; j--) {
      if (this.up[u][j] !== this.up[v][j]) {
        u = this.up[u][j];
        v = this.up[v][j];
      }
    }
    return this.up[u][0];
  }

  getDistance(u: number, v: number): number {
    if (u < 0 || u >= this.n || v < 0 || v >= this.n) {
      throw new Error("Invalid node");
    }
    const lca = this.getLCA(u, v);
    return this.depths[u] + this.depths[v] - 2 * this.depths[lca];
  }

  isAncestor(u: number, v: number): boolean {
    if (u < 0 || u >= this.n || v < 0 || v >= this.n) {
      return false;
    }
    if (this.depths[u] > this.depths[v]) {
      return false;
    }
    return this.getKthAncestor(v, this.depths[v] - this.depths[u]) === u;
  }

  getDepth(node: number): number {
    if (node < 0 || node >= this.n) {
      throw new Error("Invalid node");
    }
    return this.depths[node];
  }

  getNodeCount(): number {
    return this.n;
  }
}
