const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const firstMissingPositive = (nums) => {
    let i = 0;

    while (i < nums.length) {
        if (
            nums[i] > 0 &&
            nums[i] <= nums.length &&
            nums[i] != nums[nums[i] - 1]
        )
            swap(nums, i, nums[i] - 1);
        else i++;
    }

    for (i = 0; i < nums.length; i++) if (nums[i] != i + 1) return i + 1;
    return nums.length + 1;
};

firstMissingPositive([2, 3, 5, 12, 4, 7, 1]);
