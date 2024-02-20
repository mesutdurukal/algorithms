/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let dist = Infinity;
    let minVal;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (right > left) {
            let val = nums[i] + nums[left] + nums[right];
            if (dist > Math.abs(target - val)) {
                minVal = val;
                dist = Math.abs(target - val);
            }
            if (val < target) left++;
            else right--;
        }
    }
    return minVal;
};
threeSumClosest([1, 1, 1, 0], -100);
