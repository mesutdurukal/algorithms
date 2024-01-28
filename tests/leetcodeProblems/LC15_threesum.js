/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_ = function (nums) {
    let triples = [];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; i < nums.length - 1; i++) {
            for (let k = j + 1; i < nums.length; i++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    let triple = [nums[i], nums[j], nums[k]];
                    triples.push(triple);
                }
            }
        }
    }
    return triples;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let threesum = nums[i] + nums[left] + nums[right];
            if (threesum > 0) {
                right--;
            } else if (threesum < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                left++;

                while (nums[left] == nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }
    return res;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
