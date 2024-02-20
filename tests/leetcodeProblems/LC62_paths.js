/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let possibleMoves = 0;
    if (m == 2 && n == 2) possibleMoves = 2;
    else if (m == 1 || n == 1) possibleMoves = 1;
    else possibleMoves = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    return possibleMoves;
};

let a = uniquePaths(51, 9);
let b = 5;
