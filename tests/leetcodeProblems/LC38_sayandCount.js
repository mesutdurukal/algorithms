/**
 * @param {number} n
 * @return {string}
 */
const interpret = (n) => {
    let finalStr = '';
    let currentChar = '';
    let repeat = 0;
    for (let i = 0; i < n.length; i++) {
        if (currentChar == '') {
            currentChar = n[i];
            repeat++;
        } else {
            if (currentChar == n[i]) {
                repeat++;
            } else {
                finalStr += repeat.toString() + currentChar;
                currentChar = n[i];
                repeat = 1;
            }
        }
    }
    finalStr += repeat.toString() + currentChar;
    return finalStr;
};

var countAndSay__ = function (n) {
    let returnSay = n > 1 ? countAndSay(n - 1) : '1';
    let converted = n > 1 ? interpret(returnSay) : returnSay;
    return converted;
};

var countAndSay = function (n) {
    let returnSay = n > 1 ? countAndSay(n - 1) : '1';
    let converted = n > 1 ? interpret(returnSay) : returnSay;
    return converted;
};

countAndSay(4);
