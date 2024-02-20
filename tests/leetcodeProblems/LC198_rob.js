/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    if (nums.length == 2) return Math.max(nums[0], nums[1]);
    if (nums.length == 3) return Math.max(nums[1], nums[0] + nums[2]);
    else {
        let table = [nums[0], nums[1], nums[0] + nums[2]];
        let max = table[2];
        for (let i = 3; i < nums.length - 1; i++) {
            table[i] = Math.max(table[i - 2], table[i - 3]) + nums[i];
            if (table[i] > max) max = table[i];
        }
        return max;
    }
};

rob([2, 7, 9, 3, 1]);
