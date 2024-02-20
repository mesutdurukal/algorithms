/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let finalList = [];
const findPairs = (numsList, target, numOfPairs, path) => {
    for (let i = 0; i < numsList.length - numOfPairs - 1; i++) {
        if (numOfPairs == 1) {
            if (numsList.includes(target)) {
                path.push(target);
                finalList.push(path);
            }
        } else {
            path.push(numsList[i]);
            let newTarget = target - numsList[i];
            findPairs(
                numsList.slice(i + 1, numsList.length),
                newTarget,
                numOfPairs - 1,
                path
            );
        }
    }
};

var fourSum = function (nums, target) {
    findPairs(nums, target, 4, []);
    return finalList;
};

let a = fourSum([1, 0, -1, 0, -2, 2], 0);
let b = 5;
