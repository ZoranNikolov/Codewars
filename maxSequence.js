/**The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

var maxSequence = function (arr) {
	if (arr.length === 0) {
		return 0; // Empty list has zero greatest sum
	}

	let maxSum = 0;
	let currentSum = 0;

	for (let i = 0; i < arr.length; i++) {
		// Reset the current sum to the current element if the current sum becomes negative
		currentSum = Math.max(0, currentSum + arr[i]);
		// Update the maximum sum if the current sum is greater
		maxSum = Math.max(maxSum, currentSum);
	}

	return maxSum;
};

// Example usage:
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
