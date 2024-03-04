/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];

    function generateCombinations(start, combination) {
        if (combination.length === k) {
            result.push([...combination]);
            return;
        }
        for (let i = start; i <= n; ++i) {
            combination.push(i);
            generateCombinations(i + 1, combination);
            combination.pop();
        }
    }

    generateCombinations(1, []);
    return result;
};

let a = combine(4, 2);
let b;
