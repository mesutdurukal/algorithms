/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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

console.log(lengthOfLongestSubstring('pwwkew'));
