export function kruskal(
  n: number,
  edges: Array<[number, number, number]>,
): [number, Array<[number, number]>] {
  if (n <= 0) return [0, []];

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
    const px = find(x);
    const py = find(y);
    if (px === py) return false;

    if (rank[px] < rank[py]) {
      parent[px] = py;
    } else if (rank[px] > rank[py]) {
      parent[py] = px;
    } else {
      parent[py] = px;
      rank[px]++;
    }
    return true;
  }

  const sortedEdges = [...edges].sort((a, b) => a[2] - b[2]);
  const mst: Array<[number, number]> = [];
  let totalWeight = 0;
  for (const [u, v, w] of sortedEdges) {
    if (union(u, v)) {
      mst.push([u, v]);
      totalWeight += w;
      if (mst.length === n - 1) break;
    }
  }
  return [totalWeight, mst];
}
