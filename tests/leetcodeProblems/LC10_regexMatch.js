/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const findNextChar = (p) => {
    for (let i = 0; i < p.length; i++) {
        if (p[i] != '*' && p[i] != '.') {
            return i;
        }
    }
};

const findChar = (s, c) => {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == c) {
            return i;
        }
    }
    return -1;
};
var isMatch = function (s, p) {
    while (p.length > 0) {
        if (p[0] == '*') {
            let index = findNextChar(p);
            let stStr = index;
            while (stStr < s.length) {
                let indInString = findChar(s.slice(index, s.length), p[index]);
                if (isMatch(s.slice(stStr + indInString, s.length), p[index]))
                    return true;
                else {
                    index = findNextChar(p);
                }
            }
        } else {
            if (p[0] != '.') {
                if (s[0] != p[0]) {
                    return false;
                }
            }
            s = s.substring(1);
            p = p.substring(1);
        }
    }
    if (s.length > 0) return false;
    return true;
};

console.log(isMatch('aaaaa', 'a'));
console.log(isMatch('aaaaa', 'a*a'));
console.log(isMatch('ababb', '.*'));
