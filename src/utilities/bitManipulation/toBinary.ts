export function toBinary(n: number, padTo: number = 0): string {
  if (n < 0) {
    throw new Error("Input must be non-negative");
  }
  let binary = n.toString(2);
  if (padTo > 0) {
    binary = binary.padStart(padTo, "0");
  }
  return binary;
}
