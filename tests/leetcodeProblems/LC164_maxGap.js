/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    let myArr = [];
    for (let i = 0; i < nums.length; i++) {
        myArr[nums[i]] = 1;
    }

    let prev;
    let gap;
    let maxGap = 0;
    for (let index in myArr) {
        index = Number(index);
        if (prev == undefined) prev = index;
        gap = index - prev;
        prev = index;
        if (gap > maxGap) maxGap = gap;
    }
    return maxGap;
};

maximumGap([3, 6, 9, 1]);
