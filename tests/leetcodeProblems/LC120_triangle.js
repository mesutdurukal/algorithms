/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let temp = [[]];
    temp[0][0] = triangle[0][0];
    let minSum;
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            let lastMin;
            if (i == j) lastMin = temp[i - 1][j - 1];
            else if (j == 0) lastMin = temp[i - 1][j];
            else lastMin = Math.min(temp[i - 1][j], temp[i - 1][j - 1]);
            if (!temp[i]) temp[i] = [];
            temp[i][j] = triangle[i][j] + lastMin;
            if (i == triangle.length - 1) {
                if (j == 0) minSum = temp[i][j];
                else if (temp[i][j] < minSum) minSum = temp[i][j];
            }
        }
    }
    return minSum;
};

minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
