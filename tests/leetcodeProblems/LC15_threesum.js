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
var threeSum__ = function (nums) {
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

var threeSum___ = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let val = nums[i] + nums[l] + nums[r];
            if (val == 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l + 1] == nums[l]) {
                    l++;
                }
            }
            if (val < 0) {
                l++;
            }
            if (val > 0) {
                r--;
            }
        }
    }
    return res;
};

var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] == nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] == 0) {
                res.push([nums[i], nums[l], nums[r]]);
                let lastVal = nums[l];
                while (nums[l] == lastVal) {
                    l++;
                }
            }
            if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            }
            if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            }
        }
    }
    return res;
};

var threeSumClosest = function (nums, target) {
    let temp;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        let distance = Infinity;
        while (l < r) {
            let curVal = nums[i] + nums[l] + nums[r];
            let curDis = Math.abs(target - curVal);
            if (curDis < distance) {
                temp = curVal;
                distance = curDis;
            }
            l++;
        }
    }
    return temp;
};

console.log(threeSumClosest([0, 0, 0], 1));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
