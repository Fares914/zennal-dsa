export function bipartiteMatching(
  n1: number,
  n2: number,
  edges: Array<[number, number]>,
): number {
  const adj: Map<number, number[]> = new Map();
  for (let i = 0; i < n1; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
  }
  const match = Array(n2).fill(-1);
  let matching = 0;

  function dfs(u: number, visited: boolean[]): boolean {
    for (const v of adj.get(u) || []) {
      if (!visited[v]) {
        visited[v] = true;
        if (match[v] === -1 || dfs(match[v], visited)) {
          match[v] = u;
          return true;
        }
      }
    }
    return false;
  }
  for (let u = 0; u < n1; u++) {
    const visited = Array(n2).fill(false);
    if (dfs(u, visited)) {
      matching++;
    }
  }
  return matching;
}
