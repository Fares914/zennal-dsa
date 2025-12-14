export function floydWarshall(
  n: number,
  edges: Array<[number, number, number]>,
): number[][] {
  const dist: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (const [u, v, w] of edges) {
    dist[u][v] = Math.min(dist[u][v], w);
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }
  return dist;
}
