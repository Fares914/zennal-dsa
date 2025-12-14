export function fractionalKnapsack(
  items: Array<[number, number]>,
  capacity: number,
): number {
  if (capacity === 0 || items.length === 0) return 0;

  const ratios = items.map((item, index) => ({
    value: item[0],
    weight: item[1],
    ratio: item[0] / item[1],
    index,
  }));

  ratios.sort((a, b) => b.ratio - a.ratio);
  let totalValue = 0;
  let remainingCapacity = capacity;
  for (const item of ratios) {
    if (remainingCapacity === 0) break;
    if (item.weight <= remainingCapacity) {
      totalValue += item.value;
      remainingCapacity -= item.weight;
    } else {
      totalValue += item.ratio * remainingCapacity;
      remainingCapacity = 0;
    }
  }
  return totalValue;
}
