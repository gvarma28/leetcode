// Problem URL: https://leetcode.com/problems/set-matrix-zeroes/description/
// Submission URL (private): https://leetcode.com/problems/set-matrix-zeroes/submissions/1227826274/
/**
 Do not return anything, modify matrix in-place instead.
*/
function setZeroes(matrix: number[][]): void {
  const n = matrix.length,
    m = matrix[0].length;

  let rowFlag = false,
    colFlag = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
        /**
         * !rowFlag and !colFlag checks are just an optimization to avoid assigning the 'true' status more than once
         * This seems to improve runtime and memory performance,
         * perhaps because writing to a variable is lil more expensive.
         */
        if (i === 0 && !rowFlag) rowFlag = true;
        if (j === 0 && !colFlag) colFlag = true;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    if (matrix[i][0] === 0) {
      for (let j = 0; j < m; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    if (matrix[0][i] === 0) {
      for (let j = 0; j < n; j++) {
        matrix[j][i] = 0;
      }
    }
  }

  if (rowFlag) {
    for (let i = 0; i < m; i++) {
      matrix[0][i] = 0;
    }
  }

  if (colFlag) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }
}
