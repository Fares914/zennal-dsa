export class huffmanNode {
  char: string | null;

  frequency: number;

  left: huffmanNode | null = null;

  right: huffmanNode | null = null;

  constructor(char: string | null, frequency: number) {
    this.char = char;
    this.frequency = frequency;
  }
}
