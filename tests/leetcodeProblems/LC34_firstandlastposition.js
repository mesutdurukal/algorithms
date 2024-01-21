/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const checkFrame = (st, end) => {
        if (st >= end) return -1;
        else if (st == end - 1) {
            if (nums[st] == target) return st;
            if (nums[end] == target) return end;
            else return -1;
        }

        let midPoint = Math.floor((st + end) / 2);
        if (nums[midPoint] == target) return midPoint;
        else if (nums[midPoint] > target) end = midPoint;
        else if (nums[midPoint] < target) st = midPoint;
        return checkFrame(st, end);
    };
    let midP = checkFrame(0, nums.length);
    if (midP == -1) return [-1, -1];
    else {
        let i = midP;
        while (nums[i] == target) i--;
        let j = midP;
        while (nums[j] == target) j++;
        return [i + 1, j - 1];
    }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
