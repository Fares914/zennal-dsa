export function findArticulationPoints(
  n: number,
  edges: Array<[number, number]>,
): number[] {
  const adj: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
    adj.get(v)!.push(u);
  }
  const visited = Array(n).fill(false);
  const disc = Array(n).fill(-1);
  const low = Array(n).fill(-1);
  const parent = Array(n).fill(-1);
  const artPoints: number[] = [];
  let timer = 0;
  function dfs(u: number): void {
    let children = 0;
    visited[u] = true;
    disc[u] = low[u] = timer++;
    for (const v of adj.get(u) || []) {
      if (!visited[v]) {
        children++;
        parent[v] = u;
        dfs(v);
        low[u] = Math.min(low[u], low[v]);

        if (parent[u] === -1 && children > 1) {
          artPoints.push(u);
        }
        if (parent[u] !== -1 && low[v] >= disc[u]) {
          artPoints.push(u);
        }
      } else if (v !== parent[u]) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
  return [...new Set(artPoints)];
}
