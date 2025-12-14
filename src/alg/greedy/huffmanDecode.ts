import { huffmanNode } from "./huffmanNode";

export function huffmanDecode(
  encodedOrResult:
    | string
    | {
        huffmanCodes: Record<string, string>;
        encoded: string;
        decodingTree: huffmanNode | null;
      },
  huffmanCodesOrData?: Record<string, string> | string,
): string {
  let encoded: string;
  let huffmanCodes: Record<string, string>;

  if (
    typeof encodedOrResult === "object" &&
    encodedOrResult !== null &&
    "huffmanCodes" in encodedOrResult
  ) {
    huffmanCodes = encodedOrResult.huffmanCodes;
    encoded = typeof huffmanCodesOrData === "string" ? huffmanCodesOrData : "";
  } else {
    encoded = typeof encodedOrResult === "string" ? encodedOrResult : "";
    huffmanCodes =
      typeof huffmanCodesOrData === "object" ? huffmanCodesOrData : {};
  }
  if (encoded.length === 0) return "";

  const codeToChar = Object.entries(huffmanCodes).reduce(
    (acc, [char, code]) => {
      acc[code] = char;
      return acc;
    },
    {} as Record<string, string>,
  );
  let result = "";
  let current = "";
  for (const bit of encoded) {
    current += bit;
    if (codeToChar[current]) {
      result += codeToChar[current];
      current = "";
    }
  }
  return result;
}
