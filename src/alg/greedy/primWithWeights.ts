export function primWithWeights(
  n: number,
  edges: Array<[number, number, number]>,
): Array<[number, number, number]> {
  if (n <= 0 || edges.length === 0) return [];

  const adj: Map<number, Array<[number, number]>> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v, w] of edges) {
    adj.get(u)!.push([v, w]);
    adj.get(v)!.push([u, w]);
  }
  const visited = Array(n).fill(false);
  const mst: Array<[number, number, number]> = [];

  const pq: Array<[number, number, number]> = [[0, 0, -1]];
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [weight, u, fromV] = pq.shift()!;
    if (visited[u]) continue;
    visited[u] = true;
    if (fromV !== -1) {
      mst.push([fromV, u, weight]);
    }
    for (const [v, w] of adj.get(u) || []) {
      if (!visited[v]) {
        pq.push([w, v, u]);
      }
    }
  }
  return mst;
}
