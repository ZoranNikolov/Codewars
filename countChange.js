/**Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.
The order of coins does not matter:

1+1+2 == 2+1+1
Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

  countChange(4, [1,2]) // => 3
  countChange(10, [5,2,3]) // => 4
  countChange(11, [5,7]) //  => 0 */

  function countChange(money, coins) {
    // Initialize an array to store the number of ways to make change for each amount
    const ways = new Array(money + 1).fill(0);
    
    // There is one way to make change for 0 (no coins)
    ways[0] = 1;

    // Iterate through each coin denomination
    for (const coin of coins) {
        // Update the ways array for each amount greater than or equal to the current coin
        for (let amount = coin; amount <= money; amount++) {
            ways[amount] += ways[amount - coin];
        }
    }

    // The final result is stored in the last element of the ways array
    return ways[money];
}

// Test cases
console.log(countChange(4, [1, 2]));    // Output: 3
console.log(countChange(10, [5, 2, 3])); // Output: 4
console.log(countChange(11, [5, 7]));    // Output: 0
