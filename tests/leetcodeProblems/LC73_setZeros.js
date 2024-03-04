/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let index = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                index.push(j);
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(0)) {
            matrix[i].fill(0);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (j of index) {
            matrix[i][j] = 0;
        }
    }
};
let a = setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
]);
let b;
