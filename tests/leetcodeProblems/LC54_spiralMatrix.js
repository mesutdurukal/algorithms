/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let horizantalL = matrix[0].length - 1;
    let vertocalL = matrix.length - 1;
    let direction = 'r';
    let newArray = [];
    let i = 0;
    let j = 0;
    while (horizantalL > 0 || vertocalL > 0) {
        newArray.push(matrix[i][j]);
        if (direction == 'r') {
            j++;
        }
        if (direction == 'l') {
            j--;
        }
        if (direction == 'r') {
            i++;
        }
        if (direction == 'r') {
            i--;
        }
    }
    return newArray;
};

spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]);
