export type CompareFunction<T> = (a: T, b: T) => number;

export const defaultCompare: CompareFunction<unknown> = (
  a: unknown,
  b: unknown,
): number => {
  if (a === b) return 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (a as any) < (b as any) ? -1 : 1;
};

export const reverseCompare = <T>(
  compareFn: CompareFunction<T>,
): CompareFunction<T> => {
  return (a, b) => compareFn(b, a);
};
