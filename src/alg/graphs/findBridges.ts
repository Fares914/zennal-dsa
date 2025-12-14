export function findBridges(
  n: number,
  edges: Array<[number, number]>,
): Array<[number, number]> {
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
  const bridges: Array<[number, number]> = [];
  let timer = 0;
  function dfs(u: number, parent: number): void {
    visited[u] = true;
    disc[u] = low[u] = timer++;
    for (const v of adj.get(u) || []) {
      if (!visited[v]) {
        dfs(v, u);
        low[u] = Math.min(low[u], low[v]);

        if (low[v] > disc[u]) {
          bridges.push([u, v]);
        }
      } else if (v !== parent) {
        low[u] = Math.min(low[u], disc[v]);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, -1);
    }
  }
  return bridges;
}
