export function hasCycleUndirGraph(
  n: number,
  edges: Array<[number, number]>,
): boolean {
  const adj: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
    adj.get(v)!.push(u);
  }
  const visited = Array(n).fill(false);
  function dfs(u: number, parent: number): boolean {
    visited[u] = true;
    for (const v of adj.get(u) || []) {
      if (!visited[v]) {
        if (dfs(v, u)) {
          return true;
        }
      } else if (v !== parent) {
        return true;
      }
    }
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i] && dfs(i, -1)) {
      return true;
    }
  }
  return false;
}
