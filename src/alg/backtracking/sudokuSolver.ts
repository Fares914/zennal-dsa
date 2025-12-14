export function sudokuSolver(board: number[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let digit = 1; digit <= 9; digit++) {
          if (isValidSudoku(board, row, col, digit)) {
            board[row][col] = digit;

            if (sudokuSolver(board)) {
              return true;
            }

            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValidSudoku(
  board: number[][],
  row: number,
  col: number,
  digit: number,
): boolean {
  for (let c = 0; c < 9; c++) {
    if (board[row][c] === digit) return false;
  }

  for (let r = 0; r < 9; r++) {
    if (board[r][col] === digit) return false;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (board[r][c] === digit) return false;
    }
  }
  return true;
}
