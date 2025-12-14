export function taskScheduling(
  jobs: Array<[string, number, number]>,
): string[] {
  if (jobs.length === 0) return [];

  const sorted = [...jobs].sort((a, b) => b[2] - a[2]);
  const maxDeadline = Math.max(...sorted.map((j) => j[1]));
  const slots: (string | null)[] = Array(maxDeadline).fill(null);
  for (const [id, deadline] of sorted) {
    for (let i = Math.min(deadline, maxDeadline) - 1; i >= 0; i--) {
      if (slots[i] === null) {
        slots[i] = id;
        break;
      }
    }
  }
  return slots.filter((job) => job !== null) as string[];
}
