/**
 * @param {string} s
 * @return {number}
 */
const checkSign = (s, sign) => {
    if (s.length == 0) return;
    if (s[0] == '-') {
        sign = '-';
        s = s.substring(1);
        return [s, sign];
    }
    if (s[0] == '+') s = s.substring(1);
    return [s, sign];
};
const removeLeadingSpaces = (s) => {
    let i = 0;
    while (s[i] == ' ') {
        i++;
    }
    return s.substring(i);
};
const readAllDigits = (s) => {
    let i = 0;
    const a = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    while (a.has(s[i])) {
        i++;
    }
    return s.substring(0, i);
};
var myAtoi = function (s) {
    let st = removeLeadingSpaces(s);
    let sign = '+';
    if (st.length == 0) return 0;

    [st, sign] = checkSign(st, sign);
    st = readAllDigits(st);
    let num = Number(st);
    if (num == 0) return num;
    if (sign == '-') {
        num = num * -1;
    }
    if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
    if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    else return num;
};
console.log(myAtoi(''));
