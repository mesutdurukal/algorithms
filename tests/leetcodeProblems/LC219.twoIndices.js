var containsNearbyDuplicate_ = function (nums, k) {
    let indexMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!indexMap.has(nums[i])) {
            indexMap.set(nums[i], new Set([i]));
        } else {
            for (let j = 1; j < k + 1; j++) {
                if (indexMap.get(nums[i]).has(i - Math.min(j, i))) return true;
            }
            indexMap.set(nums[i], indexMap.get(nums[i]).add(i));
        }
    }
    return false;
};

var containsNearbyDuplicate = function (nums, k) {
    const window = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            window.delete(nums[i - k - 1]);
        }
        if (window.has(nums[i])) {
            return true;
        }
        window.add(nums[i]);
    }
    return false;
};

containsNearbyDuplicate([1, 2, 3, 1], 3);
