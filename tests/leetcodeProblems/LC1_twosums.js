function twoSum_bruteforce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // No solution found!
}

const twoSum_array = (nums, target) => {
    let indexMap = [];
    for (let i = 0; i < nums.length; i++) {
        let couple = target - nums[i];
        if (indexMap[couple] != undefined) {
            return [i, indexMap[couple]];
        }
        indexMap[nums[i]] = i;
    }
    return [];
};

// HashMap
function twoSum(nums, target) {
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    return []; // No solution found!
}

var twoSum_hashmap_twomoves = function (nums, target) {
    const numToIndex = {};

    // First pass: Populate the object
    for (let i = 0; i < nums.length; i++) {
        numToIndex[nums[i]] = i;
    }

    // Second pass: Check for the complement
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numToIndex && numToIndex[complement] !== i) {
            return [i, numToIndex[complement]];
        }
    }

    return [];
};

function twoSum_twopointers(nums, target) {
    const numsWithIndex = nums.map((num, index) => [num, index]);
    numsWithIndex.sort((a, b) => a[0] - b[0]);
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
        if (sum === target) {
            return [numsWithIndex[left][1], numsWithIndex[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return []; // No solution found!
}

console.log(twoSum([2, 7, 11, 15], 9));
