export function minimumPlatforms(
  arrivals: number[],
  departures: number[],
): number {
  if (arrivals.length === 0) return 0;

  const events: Array<[number, number]> = [];
  for (let i = 0; i < arrivals.length; i++) {
    events.push([arrivals[i], 1]);
    events.push([departures[i], -1]);
  }

  events.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  let currentPlatforms = 0;
  let maxPlatforms = 0;
  for (const [, type] of events) {
    currentPlatforms += type;
    maxPlatforms = Math.max(maxPlatforms, currentPlatforms);
  }
  return maxPlatforms;
}
