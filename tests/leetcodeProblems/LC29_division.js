/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
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

divide(2147483647, 2);
