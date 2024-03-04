/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let array = Array(n)
        .fill()
        .map(() => Array(n).fill(0));
    let left = 0;
    let right = n;
    let up = 0;
    let down = n;
    let index = 1;
    outerLoop: while (true) {
        for (let i = left; i < right; i++) {
            array[up][i] = index;
            index++;
            if (index == n * n + 1) {
                break outerLoop;
            }
        }
        up++;
        for (let i = up; i < down; i++) {
            array[i][right - 1] = index;
            index++;
            if (index == n * n + 1) {
                break;
            }
        }
        right--;
        for (let i = right - 1; i > left; i--) {
            array[down - 1][i] = index;
            index++;
            if (index == n * n + 1) {
                break;
            }
        }
        down--;
        for (let i = down; i > up - 1; i--) {
            array[i][left] = index;
            index++;
            if (index == n * n + 1) {
                break;
            }
        }
        left++;
    }
    return array;
};
generateMatrix(2);
