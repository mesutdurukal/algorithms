/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numZeros = (arry) => arry.filter((v) => v === 0).length;
const globalProduct = (arry) => {
    let pr = 1;
    for (let i = 0; i < arry.length; i++) {
        pr = pr * arry[i];
    }
    return pr;
};
const globalProductExceptZero = (arry) => {
    let pr = 1;
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] != 0) pr = pr * arry[i];
    }
    return pr;
};

var productExceptSelf = function (nums) {
    if (numZeros(nums) > 1) return new Array(nums.length).fill(0);
    else if (numZeros(nums) == 1) {
        let arry = new Array(nums.length).fill(0);
        arry[nums.indexOf(0)] = globalProductExceptZero(nums);
        return arry;
    } else {
        let gP = globalProduct(nums);
        for (let i = 0; i < nums.length; i++) {
            nums[i] = gP / nums[i];
        }
        return nums;
    }
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
