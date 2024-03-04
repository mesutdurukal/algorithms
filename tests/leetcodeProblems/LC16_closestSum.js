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
// threeSumClosest([1, 1, 1, 0], -100);
const digitToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

var letterCombinations = function (digits) {
    let comb = [];
    const rec = (digs, path) => {
        if (digs.length == 0) {
            comb.push(digs);
            return;
        }
        return rec(digs[(1, digs.length - 1)], [...path]);
    };
    for (let i = 0; i < digits.length; i++) {}
};
letterCombinations('23');
