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

var uniquePaths_ = (m, n) => {
    const addNodesToPath = (currentNode) => {
        if (currentNode[0] == m - 1 || currentNode[1] == n - 1) {
            combinations++;
            return;
        } else {
            addNodesToPath([currentNode[0] + 1, currentNode[1]]);
            addNodesToPath([currentNode[0], currentNode[1] + 1]);
        }
    };
    let combinations = 0;
    let currentNode = [0, 0];
    addNodesToPath(currentNode);
    return combinations;
};
let a = uniquePaths(3, 2);
let ab = uniquePaths(19, 13);
let b = 5;
