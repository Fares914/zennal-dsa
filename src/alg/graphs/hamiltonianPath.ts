export function hamiltonianPath(
  n: number,
  edges: Array<[number, number]>,
): number[] {
  const adj: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
  }
  const visited = Array(n).fill(false);
  const path: number[] = [];
  function backtrack(u: number): boolean {
    visited[u] = true;
    path.push(u);
    if (path.length === n) {
      return true;
    }
    for (const v of adj.get(u) || []) {
      if (!visited[v] && backtrack(v)) {
        return true;
      }
    }
    visited[u] = false;
    path.pop();
    return false;
  }
  for (let i = 0; i < n; i++) {
    visited.fill(false);
    path.length = 0;
    if (backtrack(i)) {
      return path;
    }
  }
  return [];
}
