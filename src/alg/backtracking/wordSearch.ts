export function wordSearch(board: string[][], word: string): boolean {
  if (board.length === 0 || word.length === 0) return false;
  const rows = board.length;
  const cols = board[0].length;
  const visited = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(false));
  function dfs(row: number, col: number, index: number): boolean {
    if (index === word.length) {
      return true;
    }
    if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col]) {
      return false;
    }
    if (board[row][col] !== word[index]) {
      return false;
    }
    visited[row][col] = true;

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dr, dc] of directions) {
      if (dfs(row + dr, col + dc, index + 1)) {
        return true;
      }
    }
    visited[row][col] = false;
    return false;
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) {
        return true;
      }
    }
  }
  return false;
}
