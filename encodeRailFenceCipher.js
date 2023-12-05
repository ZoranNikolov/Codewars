/**Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    
The encoded string would be:

WECRLTEERDSOEEFEAOCAIVDEN
Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

 */

function encodeRailFenceCipher(string, numberRails) {
	if (numberRails < 2) {
		throw new Error("Number of rails should be at least 2");
	}

	const rails = Array.from({ length: numberRails }, () => []);
	let railIndex = 0;
	let direction = 1;

	for (let char of string) {
		rails[railIndex].push(char);
		railIndex += direction;

		if (railIndex === 0 || railIndex === numberRails - 1) {
			direction *= -1;
		}
	}

	return rails.flat().join("");
}

function decodeRailFenceCipher(string, numberRails) {
	if (numberRails < 2) {
		throw new Error("Number of rails should be at least 2");
	}

	const rails = Array.from({ length: numberRails }, () => []);

	let railIndex = 0;
	let direction = 1;

	for (let i = 0; i < string.length; i++) {
		rails[railIndex].push(i);
		railIndex += direction;

		if (railIndex === 0 || railIndex === numberRails - 1) {
			direction *= -1;
		}
	}

	let decodedString = "";
	let charIndex = 0;

	for (let i = 0; i < numberRails; i++) {
		for (let j = 0; j < rails[i].length; j++) {
			const index = rails[i][j];
			rails[i][j] = string[charIndex++];
		}
	}

	railIndex = 0;
	direction = 1;

	for (let i = 0; i < string.length; i++) {
		decodedString += rails[railIndex].shift();
		railIndex += direction;

		if (railIndex === 0 || railIndex === numberRails - 1) {
			direction *= -1;
		}
	}

	return decodedString;
}

// Example usage:
const originalString = "WEAREDISCOVEREDFLEEATONCE";
const numberRails = 3;

const encodedString = encodeRailFenceCipher(originalString, numberRails);
console.log("Encoded:", encodedString);

const decodedString = decodeRailFenceCipher(encodedString, numberRails);
console.log("Decoded:", decodedString);
