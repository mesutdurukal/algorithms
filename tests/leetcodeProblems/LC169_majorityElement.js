/**
 * @param {number[]} nums
 * @return {number}
 */

// with Object
var majorityElement = function (nums) {
    let frequencyList = {};
    for (let i = 0; i < nums.length; i++) {
        if (!frequencyList[nums[i]]) frequencyList[nums[i]] = 0;
        frequencyList[nums[i]]++;
    }
    for (let i = 0; i < Object.keys(frequencyList).length; i++) {
        if (frequencyList[Object.keys(frequencyList)[i]] > nums.length / 2)
            return Object.keys(frequencyList)[i];
    }
};

// with Map
const majorityElement_ = (nums) => {
    let freqDict = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (freqDict.has(nums[i]))
            freqDict.set(nums[i], freqDict.get(nums[i]) + 1);
        else freqDict.set(nums[i], 1);
    }

    for (let [key, value] of freqDict) {
        if (value > nums.length / 2) {
            return key;
        }
    }
};

console.log(
    majorityElement([
        1000000000, 1000000000, -1000000000, -1000000000, -1000000000,
    ])
);
