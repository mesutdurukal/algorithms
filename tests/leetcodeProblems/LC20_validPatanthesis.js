/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let openBr = [];
    let parMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);
    let openSet = new Set(['(', '{', '[']);
    for (let i = 0; i < s.length; i++) {
        if (parMap.has(s[i])) {
            if (openBr.length < 1) return false;
            else if (openBr[openBr.length - 1] != parMap.get(s[i]))
                return false;
            else openBr.pop();
        }
        if (openSet.has(s[i])) openBr.push(s[i]);
    }
    if (openBr.length > 0) return false;
    else return true;
};
