/*
Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:

obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106
*/

var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        // If obj is an array, filter out falsy values and apply compactObject to each element
        return obj
            .filter(value => Boolean(value))
            .map(value => compactObject(value));
    } else if (typeof obj === 'object' && obj !== null) {
        // If obj is an object, filter out falsy values and apply compactObject to each value
        const result = {};
        for (const key in obj) {
            if (Boolean(obj[key])) {
                result[key] = compactObject(obj[key]);
            }
        }
        return result;
    } else {
        // If obj is not an array or object, return the value itself
        return obj;
    }
};

// Example usage:
const example1 = [null, 0, false, 1];
console.log(compactObject(example1)); // Output: [1]

const example2 = {"a": null, "b": [false, 1]};
console.log(compactObject(example2)); // Output: {"b": [1]}

const example3 = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(example3)); // Output: [5, [], [16]]

