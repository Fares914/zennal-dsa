export function kruskalWithWeights(
  n: number,
  edges: Array<[number, number, number]>,
): Array<[number, number, number]> {
  if (n <= 0 || edges.length === 0) return [];

  const sortedEdges = [...edges].sort((a, b) => a[2] - b[2]);

  const parent = Array(n)
    .fill(0)
    .map((_, i) => i);
  const rank = Array(n).fill(0);
  function find(x: number): number {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
  function union(x: number, y: number): boolean {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return false;

    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }
    return true;
  }
  const mst: Array<[number, number, number]> = [];
  for (const edge of sortedEdges) {
    const [u, v] = edge;
    if (union(u, v)) {
      mst.push(edge);
      if (mst.length === n - 1) break;
    }
  }
  return mst;
}
