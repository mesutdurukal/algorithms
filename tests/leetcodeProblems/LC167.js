var twoSum = function (numbers, target) {
    let st = 0;
    let end = numbers.length - 1;
    while (st < end) {
        if (numbers[st] + numbers[end] == target) {
            return [st + 1, end + 1];
        } else if (numbers[st] + numbers[end] > target) {
            end--;
        } else st++;
    }
    return [];
};

twoSum([2, 7, 11, 15], 9);
