var LC26_easy_ = function (nums) {
    let uniqueNums = 1;
    let lastdiff = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[lastdiff]) {
            nums[uniqueNums] = nums[i];
            uniqueNums++;
            lastdiff = i;
        }
    }
    return uniqueNums;
};

var removeDuplicates = function (nums) {
    let initNum = nums.length;
    let uniqueNums = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            nums.splice(i - 1, 1);
            uniqueNums++;
        }
    }
    return initNum - uniqueNums;
};
let a = [1, 2, 3, 0, 0, 0];
console.log(a);
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
