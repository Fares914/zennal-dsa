export function fromBinary(binary: string): number {
  if (!/^[01]+$/.test(binary)) {
    throw new Error("Input must be a valid binary string");
  }
  return parseInt(binary, 2);
}
