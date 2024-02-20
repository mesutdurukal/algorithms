/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (row === 0 && col === 0) continue;

            const left = col > 0 ? grid[row][col - 1] : Infinity;
            const top = row > 0 ? grid[row - 1][col] : Infinity;
            grid[row][col] = Math.min(
                left + grid[row][col],
                top + grid[row][col]
            );
        }
    }

    return grid[grid.length - 1][grid[0].length - 1];
};

minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]);
