export function isEulerian(
  n: number,
  edges: Array<[number, number]>,
  directed: boolean,
): { hasEulerianPath: boolean; hasEulerianCircuit: boolean } {
  const inDegree = Array(n).fill(0);
  const outDegree = Array(n).fill(0);
  for (const [u, v] of edges) {
    outDegree[u]++;
    inDegree[v]++;
    if (!directed) {
      outDegree[v]++;
      inDegree[u]++;
    }
  }
  if (directed) {
    let startNodes = 0;
    let endNodes = 0;
    for (let i = 0; i < n; i++) {
      if (outDegree[i] - inDegree[i] === 1) startNodes++;
      else if (inDegree[i] - outDegree[i] === 1) endNodes++;
      else if (inDegree[i] !== outDegree[i]) {
        return { hasEulerianPath: false, hasEulerianCircuit: false };
      }
    }
    const hasPath = startNodes === 1 && endNodes === 1;
    const hasCircuit = startNodes === 0 && endNodes === 0;
    return {
      hasEulerianPath: hasPath || hasCircuit,
      hasEulerianCircuit: hasCircuit,
    };
  } else {
    let oddDegreeVertices = 0;
    for (let i = 0; i < n; i++) {
      if (inDegree[i] % 2 === 1) oddDegreeVertices++;
    }
    const hasCircuit = oddDegreeVertices === 0;
    const hasPath = oddDegreeVertices === 2 || oddDegreeVertices === 0;
    return { hasEulerianPath: hasPath, hasEulerianCircuit: hasCircuit };
  }
}
