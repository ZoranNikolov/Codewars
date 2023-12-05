/**Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]]  */

function sudoku(puzzle) {
	function isValid(row, col, num) {
		// Check if the number is already present in the row or column
		for (let i = 0; i < 9; i++) {
			if (puzzle[row][i] === num || puzzle[i][col] === num) {
				return false;
			}
		}

		// Check if the number is present in the 3x3 grid
		const startRow = Math.floor(row / 3) * 3;
		const startCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (puzzle[startRow + i][startCol + j] === num) {
					return false;
				}
			}
		}

		return true;
	}

	function solve() {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (puzzle[row][col] === 0) {
					for (let num = 1; num <= 9; num++) {
						if (isValid(row, col, num)) {
							puzzle[row][col] = num;

							if (solve()) {
								return true; // Puzzle solved
							}

							// If placing the number doesn't lead to a solution, backtrack
							puzzle[row][col] = 0;
						}
					}

					return false; // No valid number found for this cell
				}
			}
		}

		return true; // Puzzle solved
	}

	solve();
	return puzzle;
}

// Test case
var puzzle = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(sudoku(puzzle));