/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let allSubset = [];
    let bag = [];

    var makeSubsetFrom = function (startIndex) {
        allSubset.push([...bag]);
        if (startIndex == nums.length) {
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            bag.push(nums[i]); // put this element into bag
            makeSubsetFrom(i + 1); // make subset from remaining elements
            bag.pop(); // undo selection
        }
        return;
    };
    makeSubsetFrom(0);
    return allSubset;
};

subsets([1, 2, 3]);
