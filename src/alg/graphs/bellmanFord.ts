export function bellmanFord(
  n: number,
  edges: Array<[number, number, number]>,
  start: number,
): number[] | null {
  if (n <= 0 || start < 0 || start >= n) return null;
  const distances = Array(n).fill(Infinity);
  distances[start] = 0;

  for (let i = 0; i < n - 1; i++) {
    for (const [u, v, w] of edges) {
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  for (const [u, v, w] of edges) {
    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      return null;
    }
  }
  return distances;
}
