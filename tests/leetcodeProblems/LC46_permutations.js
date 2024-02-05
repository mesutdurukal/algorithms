/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    const recursiveLists = (nums, reserved) => {
        if (nums.length === 0) {
            result.push(reserved);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            recursiveLists(
                [...nums.slice(0, i), ...nums.slice(i + 1)],
                [...reserved, nums[i]]
            );
        }
    };
    recursiveLists(nums, []);
    return result;
};

permute([1, 5, 3]);
