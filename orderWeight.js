/**My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed. */

function orderWeight(strng) {
	// Split the input string into an array of weights
	const weights = strng.split(" ");

	// Define a custom comparator function for sorting
	const customComparator = (a, b) => {
		// Calculate the weight of each number
		const weightA = a
			.split("")
			.reduce((sum, digit) => sum + parseInt(digit), 0);
		const weightB = b
			.split("")
			.reduce((sum, digit) => sum + parseInt(digit), 0);

		// If weights are equal, compare as strings
		if (weightA === weightB) {
			return a.localeCompare(b);
		}

		// Otherwise, compare weights numerically
		return weightA - weightB;
	};

	// Sort the array of weights using the custom comparator
	const sortedWeights = weights.sort(customComparator);

	// Join the sorted weights into a string and return
	return sortedWeights.join(" ");
}

// Example usage:
const result = orderWeight("56 65 74 100 99 68 86 180 90");
console.log(result); // Output: "100 180 90 56 65 74 68 86 99"
