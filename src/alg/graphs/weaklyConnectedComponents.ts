export function weaklyConnectedComponents(
  n: number,
  edges: Array<[number, number]>,
): number[][] {
  const adj: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
    adj.get(v)!.push(u);
  }
  const visited = Array(n).fill(false);
  const components: number[][] = [];
  function dfs(u: number, component: number[]): void {
    visited[u] = true;
    component.push(u);
    for (const v of adj.get(u) || []) {
      if (!visited[v]) {
        dfs(v, component);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const component: number[] = [];
      dfs(i, component);
      components.push(component);
    }
  }
  return components;
}
