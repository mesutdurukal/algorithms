/**
 * @param {number[]} nums
 * @return {number}
 */
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

console.log(
    majorityElement([
        1000000000, 1000000000, -1000000000, -1000000000, -1000000000,
    ])
);
