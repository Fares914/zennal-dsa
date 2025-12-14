export function hasCycleDirGraph(
  n: number,
  edges: Array<[number, number]>,
): boolean {
  const adj: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
  }

  const color = Array(n).fill(0);
  function dfs(u: number): boolean {
    color[u] = 1;
    for (const v of adj.get(u) || []) {
      if (color[v] === 1) {
        return true;
      }
      if (color[v] === 0 && dfs(v)) {
        return true;
      }
    }
    color[u] = 2;
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (color[i] === 0 && dfs(i)) {
      return true;
    }
  }
  return false;
}
