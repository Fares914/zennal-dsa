export function stronglyConnectedComponents(
  n: number,
  edges: Array<[number, number]>,
): number[][] {
  const adj: Map<number, number[]> = new Map();
  const revAdj: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
    revAdj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
    revAdj.get(v)!.push(u);
  }

  const visited = Array(n).fill(false);
  const finishStack: number[] = [];
  function dfs1(u: number): void {
    visited[u] = true;
    for (const v of adj.get(u) || []) {
      if (!visited[v]) {
        dfs1(v);
      }
    }
    finishStack.push(u);
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs1(i);
    }
  }

  visited.fill(false);
  const sccs: number[][] = [];
  function dfs2(u: number, component: number[]): void {
    visited[u] = true;
    component.push(u);
    for (const v of revAdj.get(u) || []) {
      if (!visited[v]) {
        dfs2(v, component);
      }
    }
  }
  while (finishStack.length > 0) {
    const u = finishStack.pop()!;
    if (!visited[u]) {
      const component: number[] = [];
      dfs2(u, component);
      sccs.push(component);
    }
  }
  return sccs;
}
