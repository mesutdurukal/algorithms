/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let newArray = [];
let i = 0;
let j = 0;
let direction = 'r';
let spot = 0;
let ceil = 0;
let rL;
let lL = 0;
let ground;
const calcNewCoord = () => {
    if (direction == 'r') {
        j++;
    }
    if (direction == 'd') {
        i++;
    }
    if (direction == 'l') {
        j--;
    }
    if (direction == 'u') {
        i--;
    }
};

const calcDir = () => {
    if (direction == 'r') {
        if (j == rL) {
            direction = 'd';
            ceil++;
        }
    }
    if (direction == 'd') {
        if (i == ground) {
            direction = 'l';
            rL--;
        }
    }
    if (direction == 'l') {
        if (j == lL) {
            direction = 'u';
            ground--;
        }
    }
    if (direction == 'u') {
        if (i == ceil) {
            direction = 'r';
            lL++;
        }
    }
};

var spiralOrder = function (matrix) {
    rL = matrix[0].length - 1;
    ground = matrix.length - 1;
    while (spot < matrix.length * matrix[0].length) {
        newArray.push(matrix[i][j]);
        spot++;
        calcDir();
        calcNewCoord();
    }
    return newArray;
};

spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]);
