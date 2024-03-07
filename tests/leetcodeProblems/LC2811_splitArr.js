/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */
var canSplitArray = function (nums, m) {
    if (nums.length <= 2) return true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[i + 1] >= m) {
            return true;
        }
    }

    return false;
};

//canSplitArray([1, 2, 2, 1], 4);

const uniquePaths = (m, n) => {
    let possibleMoves = 0;
    if (m == 1 || n == 1) possibleMoves = 1;
    else possibleMoves = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    return possibleMoves;
};

let a = uniquePaths(3, 7);
let b;
