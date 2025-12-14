export type GraphType = "directed" | "undirected";
interface GraphEdge<T> {
  vertex: T;
  weight?: number;
}

export class Graph<T> {
  private adjacencyList: Map<T, GraphEdge<T>[]> = new Map();
  private type: GraphType;

  constructor(type: GraphType = "undirected") {
    this.type = type;
  }

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1: T, v2: T, weight?: number): void {
    this.addVertex(v1);
    this.addVertex(v2);
    const edges1 = this.adjacencyList.get(v1)!;

    if (!edges1.some((e) => e.vertex === v2)) {
      edges1.push({ vertex: v2, weight });
    }

    if (this.type === "undirected") {
      const edges2 = this.adjacencyList.get(v2)!;
      if (!edges2.some((e) => e.vertex === v1)) {
        edges2.push({ vertex: v1, weight });
      }
    }
  }

  removeVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      return;
    }

    for (const [, edges] of this.adjacencyList) {
      const index = edges.findIndex((e) => e.vertex === vertex);
      if (index !== -1) {
        edges.splice(index, 1);
      }
    }

    this.adjacencyList.delete(vertex);
  }

  removeEdge(v1: T, v2: T): void {
    if (!this.adjacencyList.has(v1)) {
      return;
    }
    const edges = this.adjacencyList.get(v1)!;
    const index = edges.findIndex((e) => e.vertex === v2);
    if (index !== -1) {
      edges.splice(index, 1);
    }

    if (this.type === "undirected" && this.adjacencyList.has(v2)) {
      const reverseEdges = this.adjacencyList.get(v2)!;
      const reverseIndex = reverseEdges.findIndex((e) => e.vertex === v1);
      if (reverseIndex !== -1) {
        reverseEdges.splice(reverseIndex, 1);
      }
    }
  }

  bfs(start: T, callback?: (vertex: T) => void): T[] {
    if (!this.adjacencyList.has(start)) {
      return [];
    }
    const visited = new Set<T>();
    const queue: T[] = [start];
    const result: T[] = [];
    visited.add(start);
    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);
      if (callback) callback(vertex);
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.push(edge.vertex);
        }
      }
    }
    return result;
  }

  dfs(start: T, callback?: (vertex: T) => void): T[] {
    if (!this.adjacencyList.has(start)) {
      return [];
    }
    const visited = new Set<T>();
    const result: T[] = [];
    const dfsHelper = (vertex: T) => {
      visited.add(vertex);
      result.push(vertex);
      if (callback) callback(vertex);
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          dfsHelper(edge.vertex);
        }
      }
    };
    dfsHelper(start);
    return result;
  }

  dijkstra(start: T): Map<T, number> {
    if (!this.adjacencyList.has(start)) {
      return new Map();
    }
    const distances = new Map<T, number>();
    const visited = new Set<T>();

    for (const vertex of this.adjacencyList.keys()) {
      distances.set(vertex, Infinity);
    }
    distances.set(start, 0);

    const pq: Array<[T, number]> = [[start, 0]];
    while (pq.length > 0) {
      let minIndex = 0;
      for (let i = 1; i < pq.length; i++) {
        if (pq[i][1] < pq[minIndex][1]) {
          minIndex = i;
        }
      }
      const [currentVertex, currentDist] = pq.splice(minIndex, 1)[0];

      if (visited.has(currentVertex)) {
        continue;
      }
      visited.add(currentVertex);

      if (currentDist > distances.get(currentVertex)!) {
        continue;
      }
      const neighbors = this.adjacencyList.get(currentVertex) || [];
      for (const edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          const weight = edge.weight ?? 1;
          const newDist = currentDist + weight;
          if (newDist < distances.get(edge.vertex)!) {
            distances.set(edge.vertex, newDist);
            pq.push([edge.vertex, newDist]);
          }
        }
      }
    }
    return distances;
  }

  getVertices(): T[] {
    return Array.from(this.adjacencyList.keys());
  }

  getNeighbors(vertex: T): T[] {
    if (!this.adjacencyList.has(vertex)) {
      return [];
    }
    return (this.adjacencyList.get(vertex) || []).map((e) => e.vertex);
  }

  getEdgeWeight(v1: T, v2: T): number | undefined {
    if (!this.adjacencyList.has(v1)) {
      return undefined;
    }
    const edge = (this.adjacencyList.get(v1) || []).find(
      (e) => e.vertex === v2,
    );
    return edge?.weight ?? 1;
  }

  hasEdge(v1: T, v2: T): boolean {
    if (!this.adjacencyList.has(v1)) {
      return false;
    }
    return (this.adjacencyList.get(v1) || []).some((e) => e.vertex === v2);
  }

  hasVertex(vertex: T): boolean {
    return this.adjacencyList.has(vertex);
  }

  vertexCount(): number {
    return this.adjacencyList.size;
  }

  edgeCount(): number {
    let count = 0;
    for (const edges of this.adjacencyList.values()) {
      count += edges.length;
    }
    return this.type === "undirected" ? count / 2 : count;
  }

  degree(vertex: T): number {
    if (!this.adjacencyList.has(vertex)) {
      return 0;
    }
    return (this.adjacencyList.get(vertex) || []).length;
  }

  isConnected(): boolean {
    if (this.adjacencyList.size === 0) {
      return true;
    }
    const start = this.adjacencyList.keys().next().value as T;
    const visited = this.bfs(start);
    return visited.length === this.adjacencyList.size;
  }

  topologicalSort(): T[] {
    const visited = new Set<T>();
    const stack: T[] = [];
    const dfsHelper = (vertex: T) => {
      visited.add(vertex);
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          dfsHelper(edge.vertex);
        }
      }
      stack.push(vertex);
    };
    for (const vertex of this.adjacencyList.keys()) {
      if (!visited.has(vertex)) {
        dfsHelper(vertex);
      }
    }
    return stack.reverse();
  }

  reachableFrom(start: T): Set<T> {
    const visited = new Set<T>();
    const queue = [start];
    while (queue.length > 0) {
      const vertex = queue.shift()!;
      if (visited.has(vertex)) {
        continue;
      }
      visited.add(vertex);
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          queue.push(edge.vertex);
        }
      }
    }
    return visited;
  }

  getAdjacencyMatrix(): number[][] {
    const vertices = this.getVertices();
    const n = vertices.length;
    const matrix: number[][] = Array(n)
      .fill(0)
      .map(() => Array(n).fill(0));
    const vertexIndex = new Map<T, number>();
    vertices.forEach((v, i) => vertexIndex.set(v, i));
    for (const [v1, edges] of this.adjacencyList) {
      const i = vertexIndex.get(v1)!;
      for (const edge of edges) {
        const j = vertexIndex.get(edge.vertex)!;
        matrix[i][j] = edge.weight ?? 1;
      }
    }
    return matrix;
  }

  clear(): void {
    this.adjacencyList.clear();
  }

  getType(): GraphType {
    return this.type;
  }
}
