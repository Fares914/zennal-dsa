import { huffmanNode } from "./huffmanNode";

export function huffmanCoding(
  data: string | string[],
  frequencies?: number[],
): {
  huffmanCodes: Record<string, string>;
  encoded: string;
  decodingTree: huffmanNode | null;
} {
  if (Array.isArray(data) && frequencies) {
    const freqMap = new Map<string, number>();
    for (let i = 0; i < data.length; i++) {
      freqMap.set(data[i], frequencies[i]);
    }
    if (freqMap.size === 0) {
      return { huffmanCodes: {}, encoded: "", decodingTree: null };
    }
    return buildHuffmanTreeFromFreqMap(freqMap);
  }

  if (typeof data !== "string" || data.length === 0) {
    return { huffmanCodes: {}, encoded: "", decodingTree: null };
  }

  const freqMap = new Map<string, number>();
  for (const char of data) {
    freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
  }

  if (freqMap.size === 1) {
    const char = Array.from(freqMap.keys())[0];
    return {
      huffmanCodes: { [char]: "0" },
      encoded: data.replaceAll(char, "0"),
      decodingTree: new huffmanNode(char, 1),
    };
  }

  const heap: huffmanNode[] = [];
  for (const [char, freq] of freqMap) {
    heap.push(new huffmanNode(char, freq));
  }

  while (heap.length > 1) {
    heap.sort((a, b) => a.frequency - b.frequency);
    const left = heap.shift()!;
    const right = heap.shift()!;

    const parent = new huffmanNode(null, left.frequency + right.frequency);
    parent.left = left;
    parent.right = right;
    heap.push(parent);
  }
  const root = heap[0];

  const huffmanCodes: Record<string, string> = {};
  function generateCodes(node: huffmanNode | null, code: string): void {
    if (!node) return;
    if (node.char !== null) {
      huffmanCodes[node.char] = code || "0";
    }
    generateCodes(node.left, code + "0");
    generateCodes(node.right, code + "1");
  }
  generateCodes(root, "");

  const encoded = data
    .split("")
    .map((char) => huffmanCodes[char])
    .join("");
  return { huffmanCodes, encoded, decodingTree: root };
}

function buildHuffmanTreeFromFreqMap(freqMap: Map<string, number>): {
  huffmanCodes: Record<string, string>;
  encoded: string;
  decodingTree: huffmanNode | null;
} {
  if (freqMap.size === 1) {
    const char = Array.from(freqMap.keys())[0];
    return {
      huffmanCodes: { [char]: "0" },
      encoded: "",
      decodingTree: new huffmanNode(char, 1),
    };
  }

  const heap: huffmanNode[] = [];
  for (const [char, freq] of freqMap) {
    heap.push(new huffmanNode(char, freq));
  }

  while (heap.length > 1) {
    heap.sort((a, b) => a.frequency - b.frequency);
    const left = heap.shift()!;
    const right = heap.shift()!;
    const parent = new huffmanNode(null, left.frequency + right.frequency);
    parent.left = left;
    parent.right = right;
    heap.push(parent);
  }
  const root = heap[0];

  const huffmanCodes: Record<string, string> = {};
  function generateCodes(node: huffmanNode | null, code: string): void {
    if (!node) return;
    if (node.char !== null) {
      huffmanCodes[node.char] = code || "0";
    }
    generateCodes(node.left, code + "0");
    generateCodes(node.right, code + "1");
  }
  generateCodes(root, "");
  return { huffmanCodes, encoded: "", decodingTree: root };
}
