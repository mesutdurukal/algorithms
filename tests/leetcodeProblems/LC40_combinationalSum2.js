/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    if (!candidates || candidates.length == 0) return [];
    let res = [];
    candidates.sort((a, b) => a - b);
    var helper = function (targ, path, index) {
        if (targ == 0) {
            res.push([...path]);
            return;
        }
        for (let i = index; i < candidates.length; i++) {
            if (i != index && candidates[i] == candidates[i - 1]) continue; //already return, go next loop(not recursion)
            if (targ < 0) return;
            path.push(candidates[i]);
            helper(targ - candidates[i], path, i + 1);
            path.pop();
        }
    };
    helper(target, [], 0);
    return res;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
