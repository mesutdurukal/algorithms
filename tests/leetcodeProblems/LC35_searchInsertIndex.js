/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let st = 0;
    let end = nums.length - 1;

    while (end > st + 1) {
        let half = Math.floor((st + end) / 2);
        if (nums[half] == target) return half;
        else if (nums[half] > target) {
            end = half;
        } else if (nums[half] < target) {
            st = half;
        }
    }
    if (nums[st] == target) return st;
    if (nums[end] < target) return end + 1;
    else if (nums[st] > target) return st;
    else return end;
};

console.log(searchInsert([1, 3, 5, 6], 5));
