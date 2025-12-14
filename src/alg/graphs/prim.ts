export function prim(
  n: number,
  edges: Array<[number, number, number]>,
): [number, Array<[number, number]>] {
  if (n <= 0) return [0, []];

  const adj: Map<number, Array<[number, number]>> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v, w] of edges) {
    adj.get(u)!.push([v, w]);
    adj.get(v)!.push([u, w]);
  }
  const visited = Array(n).fill(false);
  const mst: Array<[number, number]> = [];
  let totalWeight = 0;

  const pq: Array<[number, number]> = [[0, 0]];
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [weight, u] = pq.shift()!;
    if (visited[u]) continue;
    visited[u] = true;
    totalWeight += weight;
    for (const [v, w] of adj.get(u) || []) {
      if (!visited[v]) {
        pq.push([w, v]);

        if (mst.length < n - 1) {
          mst.push([u, v]);
        }
      }
    }
  }
  return [totalWeight, mst];
}
