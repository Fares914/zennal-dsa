export function maximumFlow(
  n: number,
  edges: Array<[number, number, number]>,
  source: number,
  sink: number,
): number {
  if (source === sink || n <= 0) return 0;

  const capacity: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));
  for (const [u, v, cap] of edges) {
    capacity[u][v] += cap;
  }
  let maxFlow = 0;

  function dfs(u: number, visited: boolean[], minCap: number): number {
    if (u === sink) return minCap;
    visited[u] = true;
    for (let v = 0; v < n; v++) {
      if (!visited[v] && capacity[u][v] > 0) {
        const flow = dfs(v, visited, Math.min(minCap, capacity[u][v]));
        if (flow > 0) {
          capacity[u][v] -= flow;
          capacity[v][u] += flow;
          return flow;
        }
      }
    }
    return 0;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const visited = Array(n).fill(false);
    const flow = dfs(source, visited, Infinity);
    if (flow === 0) break;
    maxFlow += flow;
  }
  return maxFlow;
}
