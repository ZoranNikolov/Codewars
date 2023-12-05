/**Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers. */

function nextSmaller(n) {
	const digits = String(n).split("").map(Number);
	let i = digits.length - 2;

	// Find the first index from the right where digits[i] > digits[i + 1]
	while (i >= 0 && digits[i] <= digits[i + 1]) {
		i--;
	}

	if (i === -1) {
		// No such index found, return -1
		return -1;
	}

	// Find the smallest digit to the right of index i that is larger than digits[i]
	let j = digits.length - 1;
	while (digits[j] >= digits[i]) {
		j--;
	}

	// Swap digits[i] and digits[j]
	[digits[i], digits[j]] = [digits[j], digits[i]];

	// Sort the subarray to the right of index i in descending order
	const sortedSubarray = digits.slice(i + 1).sort((a, b) => b - a);

	// Concatenate the modified array and convert it back to a number
	const result = parseInt(
		[...digits.slice(0, i + 1), ...sortedSubarray].join("")
	);

	// Check for leading zeros in the result
	return String(result).length === digits.length ? result : -1;
}

// Examples
console.log(nextSmaller(21)); // Output: 12
console.log(nextSmaller(531)); // Output: 513
console.log(nextSmaller(2071)); // Output: 2017
console.log(nextSmaller(9)); // Output: -1
console.log(nextSmaller(111)); // Output: -1
console.log(nextSmaller(135)); // Output: -1
console.log(nextSmaller(1027)); // Output: -1
