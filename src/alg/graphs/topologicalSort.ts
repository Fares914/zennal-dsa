export function topologicalSort(
  n: number,
  edges: Array<[number, number]>,
): number[] {
  const adj: Map<number, number[]> = new Map();
  const inDegree = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (const [u, v] of edges) {
    adj.get(u)!.push(v);
    inDegree[v]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  const result: number[] = [];
  while (queue.length > 0) {
    const u = queue.shift()!;
    result.push(u);
    for (const v of adj.get(u) || []) {
      inDegree[v]--;
      if (inDegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return result.length === n ? result : [];
}
