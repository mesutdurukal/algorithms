/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const calcDigit = (number, digit = 0) => {
    if (number < 2) {
        return digit;
    }
    let newN = Math.floor(number / 2);
    return calcDigit(newN, digit + 1);
};

var rangeBitwiseAnd_ = function (left, right) {
    if (left == right && left > 0) return right;
    else if (right < 2 || right > 2147483646) return 0;
    let leftD = calcDigit(left);
    let rightD = calcDigit(right);
    if (rightD > leftD) return 0;
    return 2 ** calcDigit(right);
};

var rangeBitwiseAnd = function (left, right) {
    const p = Math.log2(left ^ right);
    return (left >> p) << p;
};

console.log(rangeBitwiseAnd(6, 7));
let a = 4;
