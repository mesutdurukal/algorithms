var minIncrements = function (n, cost) {
    let ans = 0;
    dfs(1);
    return ans;

    function dfs(i) {
        if (i * 2 > n) return cost[i - 1]; // leaf node
        let leftSum = dfs(2 * i),
            rightSum = dfs(2 * i + 1);
        ans += Math.max(leftSum, rightSum) - Math.min(leftSum, rightSum);
        return cost[i - 1] + Math.max(leftSum, rightSum);
    }
};

minIncrements(7, [1, 5, 2, 2, 3, 3, 1]);
