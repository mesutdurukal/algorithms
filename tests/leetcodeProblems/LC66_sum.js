var plusOne = function (digits) {
    let remainder = 1;
    let index = digits.length - 1;
    while (remainder) {
        if (digits[index] != 9) {
            remainder = 0;
            digits[index]++;
        } else {
            digits[index] = 0;
        }

        index--;
        if (index == -1) {
            break;
        }
    }
    if (remainder) {
        digits.unshift(1);
    }
    return digits;
};

plusOne([9]);
