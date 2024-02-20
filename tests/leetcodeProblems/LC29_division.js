/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide__ = function (dividend, divisor) {
    let sum = 0;
    let i = 0;
    let res;
    if (dividend == 0) return 0;
    if (dividend > 0 && divisor > 0) {
        while (sum < dividend && i < 2147483647) {
            sum += divisor;
            i++;
        }
        res = sum == dividend ? i : i - 1;
    } else if (dividend > 0 && divisor < 0) {
        while (sum < dividend) {
            sum -= divisor;
            i--;
        }
        res = sum == dividend ? i : i + 1;
    } else if (dividend < 0 && divisor > 0) {
        while (sum > dividend) {
            sum -= divisor;
            i--;
        }
        res = sum == dividend ? i : i + 1;
    } else if (dividend < 0 && divisor < 0) {
        while (sum > dividend) {
            sum += divisor;
            i++;
        }
        res = sum == dividend ? i : i - 1;
    }

    let f;
    f = res < -2147483647 ? -2147483647 : res;
    f = res > 2147483647 ? 2147483647 : res;
    return f;
};

var divide = function (dividend, divisor) {
    const isNegative = Math.sign(divisor) !== Math.sign(dividend);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = 0;
    while (divisor <= dividend) {
        let value = divisor;
        let multiple = 1;
        while (value + value <= dividend) {
            value += value;
            multiple += multiple;
        }
        dividend = dividend - value;
        result += multiple;
    }

    if (result > 2 ** 31 - 1) {
        return isNegative ? -(2 ** 31) : 2 ** 31 - 1;
    }
    return isNegative ? -result : result;
};

divide(2147483647, 2);
