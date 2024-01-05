/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let target = nums.length - 1;
    let start = 0;
    while (target > 0) {
        let jumpDist = target - start;

        if (nums[start] >= jumpDist) {
            target = start;
            start = 0;
        } else {
            start++;
            if (start == target) return false;
        }
    }
    return true;
};

const minSteps = function (nums) {
    let steps = 0;
    let target = nums.length - 1;
    let temptarget = target;
    let maxDist = 1;
    while (target > 0) {
        if (nums[target - maxDist] >= maxDist) temptarget = target - maxDist;

        if (maxDist >= target) {
            target = temptarget;
            steps++;
            maxDist = 1;
        } else maxDist++;
    }
    return steps++;
};

console.log(minSteps([2, 3, 1, 1, 4]));
