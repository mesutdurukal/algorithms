var combinationSum = function (candidates, target) {
    let fullList = [];
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

    dfs(candidates, target, []);
    return fullList;
};

combinationSum([7, 2, 3, 1, 5], 7);
combinationSum([2, 3, 6, 7], 7);
