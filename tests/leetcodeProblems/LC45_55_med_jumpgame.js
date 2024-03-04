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
    let backwardScanIndex = 1;
    while (target > 0) {
        let index = target - backwardScanIndex;
        if (nums[index] >= backwardScanIndex) {
            // Means I can reach to the next target from the current index. So; mark it as a candidate target
            temptarget = index;
        }

        if (backwardScanIndex >= target) {
            // Reached to the end of scanning
            target = temptarget;
            steps++;
            backwardScanIndex = 1;
        } else {
            backwardScanIndex++;
        }
    }
    return steps++;
};

// console.log(minSteps([2, 3, 1, 1, 4]));
console.log(minSteps([2, 2, 0, 1, 4]));
