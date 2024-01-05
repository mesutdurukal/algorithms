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

let a = [1, 2, 3, 0, 0, 0];
console.log(a);
console.log(LC26_easy_([0, 1]));
