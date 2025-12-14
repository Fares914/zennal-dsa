export function dijkstra(
  n: number,
  edges: Array<[number, number, number]>,
  start: number,
): number[] {
  if (n <= 0 || start < 0 || start >= n) return [];

  const adj: Map<number, Array<[number, number]>> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v, w] of edges) {
    adj.get(u)!.push([v, w]);
  }
  const distances = Array(n).fill(Infinity);
  distances[start] = 0;
  const visited = Array(n).fill(false);
  const pq: Array<[number, number]> = [[0, start]];
  while (pq.length > 0) {
    pq.sort((a, b) => a[0] - b[0]);
    const [, u] = pq.shift()!;
    if (visited[u]) continue;
    visited[u] = true;
    for (const [v, w] of adj.get(u) || []) {
      const newDist = distances[u] + w;
      if (newDist < distances[v]) {
        distances[v] = newDist;
        pq.push([newDist, v]);
      }
    }
  }
  return distances;
}
