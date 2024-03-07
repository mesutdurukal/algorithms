/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let allSubset = [];

    var makeSubsetFrom = function (startIndex, path) {
        allSubset.push([...path]);
        if (startIndex == nums.length) {
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]); // put this element into bag
            makeSubsetFrom(i + 1, path); // make subset from remaining elements
            path.pop(); // undo selection
        }
        return;
    };
    makeSubsetFrom(0, []);
    return allSubset;
};

subsets([1, 2, 3]);
