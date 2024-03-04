/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    let previous = new Array(n).fill(0);
    previous[0] = 1;

    for (let row = 0; row < m; row++) {
        const current = new Array(n).fill(0);
        for (let col = 0; col < n; col++) {
            const isObstacle = obstacleGrid[row][col] === 1;
            if (isObstacle) continue;

            current[col] = previous[col] + (current[col - 1] ?? 0);
        }
        previous = current;
    }

    return previous[n - 1];
}

uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
]);
