/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let lengthOfPattern = pattern.length;
    let Words = s.split(' '); // eliminate multiple spaces
    let lengthOfString = Words.length;
    if (lengthOfString == 0 || lengthOfPattern == 0) return false;
    if (lengthOfString != lengthOfPattern) return false;
    let dict = [];
    for (let i = 0; i < lengthOfString; i++) {
        if (dict[pattern[i].charCodeAt(0)]) {
            if (Words[i] != dict[pattern[i].charCodeAt(0)]) return false;
        } else if (dict.indexOf(Words[i]) >= 0) {
            return false;
        } else dict[pattern[i].charCodeAt(0)] = Words[i];
    }
    return true;
};

console.log(wordPattern('abba', 'dog dog dog dog'));
