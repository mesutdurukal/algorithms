const LC189_med_rotateArray = (nums, l) => {
    l = l % nums.length;
    let k = nums.length - l;
    const a = nums.slice(k, nums.length).concat(nums.slice(0, k));
    for (let i = 0; i < nums.length; i++) nums[i] = a[i];
};

let nums = [1, 2];
//let nums = [-1, -100, 3, 99];
LC189_med_rotateArray(nums, 5);
console.log(nums);
