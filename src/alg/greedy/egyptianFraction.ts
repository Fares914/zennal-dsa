export function egyptianFraction(
  numerator: number,
  denominator: number,
): number[] {
  if (numerator === 0) return [];
  if (numerator === denominator) return [1];
  const result: number[] = [];
  while (numerator !== 0) {
    const x = Math.ceil(denominator / numerator);
    result.push(x);

    numerator = numerator * x - denominator;
    denominator = denominator * x;

    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const g = gcd(numerator, denominator);
    numerator /= g;
    denominator /= g;
  }
  return result;
}
