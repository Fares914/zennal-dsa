export function graphColoring(
  n: number,
  edges: Array<[number, number]>,
): number[] {
  const adj: Map<number, Set<number>> = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, new Set());
  }
  for (const [u, v] of edges) {
    adj.get(u)!.add(v);
    adj.get(v)!.add(u);
  }
  const colors = Array(n).fill(-1);
  for (let u = 0; u < n; u++) {
    const availableColors = Array(n).fill(true);

    for (const v of adj.get(u) || []) {
      if (colors[v] !== -1) {
        availableColors[colors[v]] = false;
      }
    }

    let color = 0;
    for (let c = 0; c < availableColors.length; c++) {
      if (availableColors[c]) {
        color = c;
        break;
      }
    }
    colors[u] = color;
  }
  return colors;
}
