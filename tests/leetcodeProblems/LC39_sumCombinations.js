let fullList = [];

var combinationSum = function (candidates, target) {
    dfs(candidates, target, [], fullList);
    return fullList;
};

function dfs(nums, target, path) {
    if (target < 0) {
        // Backtracking
        return;
    }
    if (target === 0) {
        fullList.push(path);
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        dfs(nums.slice(i), target - nums[i], [...path, nums[i]]);
    }
}

combinationSum([2, 3, 6, 7], 7);
