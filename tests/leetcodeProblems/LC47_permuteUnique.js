/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let list = [];
    if (nums.length == 1) {
        return [nums];
    }

    const findPermutes = (nums, path) => {
        let subset = new Set();
        if (nums.length == 2) {
            list.push([...path, nums[0], nums[1]]);
            if (nums[1] != nums[0]) list.push([...path, nums[1], nums[0]]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!subset.has(nums[i])) {
                subset.add(nums[i]);
                findPermutes(
                    [...nums.slice(0, i), ...nums.slice(i + 1)],
                    [...path, nums[i]]
                );
            }
        }
    };

    findPermutes(nums, []);
    return list;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique_ = function (nums) {
    nums.sort((a, b) => a - b);
    let list = [];

    let iterate = (arr, path) => {
        if (arr.length == 1) {
            list.push([...path, arr[0]]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arr[i - 1]) continue;
            iterate(
                arr.filter((num, idx) => idx != i),
                [...path, arr[i]]
            );
        }
    };
    iterate(nums, []);
    return list;
};

let a = permuteUnique([1]);
let b = 5;
