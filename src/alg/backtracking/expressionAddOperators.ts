export function expressionAddOperators(num: string, target: number): string[] {
  const result: string[] = [];
  if (num.length === 0) return result;
  function backtrack(
    index: number,
    currentExpr: string,
    currentSum: number,
    lastOperand: number,
  ): void {
    if (index === num.length) {
      if (currentSum === target) {
        result.push(currentExpr);
      }
      return;
    }
    for (let i = index + 1; i <= num.length; i++) {
      const operand = parseInt(num.substring(index, i), 10);

      if (num[index] === "0" && i > index + 1) {
        break;
      }
      if (index === 0) {
        backtrack(i, num.substring(0, i), operand, operand);
      } else {
        backtrack(
          i,
          currentExpr + "+" + num.substring(index, i),
          currentSum + operand,
          operand,
        );

        backtrack(
          i,
          currentExpr + "-" + num.substring(index, i),
          currentSum - operand,
          -operand,
        );

        backtrack(
          i,
          currentExpr + "*" + num.substring(index, i),
          currentSum - lastOperand + lastOperand * operand,
          lastOperand * operand,
        );
      }
    }
  }
  backtrack(0, "", 0, 0);
  return result;
}
