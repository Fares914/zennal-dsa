export function activitySelection(
  activities: Array<[number, number]>,
): number[] {
  if (activities.length === 0) return [];

  const indexed = activities.map((activity, index) => ({
    start: activity[0],
    end: activity[1],
    index,
  }));

  indexed.sort((a, b) => a.end - b.end);
  const selected: number[] = [];
  let lastEnd = -1;
  for (const activity of indexed) {
    if (activity.start >= lastEnd) {
      selected.push(activity.index);
      lastEnd = activity.end;
    }
  }
  return selected;
}
