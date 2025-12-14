export function nQueens(n: number): number[][] {
  if (n <= 0) return [];
  const result: number[][] = [];
  const board = new Array(n).fill(-1);
  function isSafe(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      const prevCol = board[i];

      if (prevCol === col || Math.abs(prevCol - col) === Math.abs(i - row)) {
        return false;
      }
    }
    return true;
  }
  function solve(row: number): void {
    if (row === n) {
      result.push([...board]);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = col;
        solve(row + 1);
        board[row] = -1;
      }
    }
  }
  solve(0);
  return result;
}
