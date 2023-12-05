/**
You are given a 2D integer array matrix. Your task is to find the max sum value of the contiguous-submatrix in it.
 */

function maxSumOf(matrix) {
	const rows = matrix.length;
	const cols = matrix[0].length;
	let maxSum = matrix[0][0];

	for (let left = 0; left < cols; left++) {
		const temp = Array(rows).fill(0);

		for (let right = left; right < cols; right++) {
			let currentSum = 0;
			let maxEndingHere = 0;

			for (let i = 0; i < rows; i++) {
				temp[i] += matrix[i][right];
				currentSum = Math.max(temp[i], currentSum + temp[i]);
				maxEndingHere = Math.max(maxEndingHere, currentSum);
			}

			maxSum = Math.max(maxSum, maxEndingHere);
		}
	}

	return maxSum;
}
