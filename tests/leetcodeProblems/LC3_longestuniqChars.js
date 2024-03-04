/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_ = function (s) {
    let st = 0;
    let currentLen = 0;
    let max = 0;
    let charset = new Set();

    for (let ind = 0; ind < s.length; ind++) {
        if (charset.has(s[ind])) {
            currentLen = ind - st;
            if (currentLen > max) {
                max = currentLen;
            }
            while (charset.has(s[ind])) {
                charset.delete(s[st]);
                st++;
            }
        }
        charset.add(s[ind]);
    }
    if (charset.size > max) {
        max = charset.size;
    }
    return max;
};

var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let index = 0;
    while (index < s.length) {
        let chars = new Set();
        let len = 0;
        for (let i = index; i < s.length; i++) {
            if (chars.has(s[i])) {
                if (len > max) max = len;
                index += s.substring(index, s.length - 1).indexOf(s[i]);
                break;
            } else {
                chars.add(s[i]);
                len++;
            }
        }
        index++;
    }
    return max;
};

console.log(lengthOfLongestSubstring(' '));
