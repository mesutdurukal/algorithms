/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring__ = function (s) {
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
        let completed = true;
        let chars = new Set();
        let len = 0;
        for (let i = index; i < s.length; i++) {
            if (chars.has(s[i])) {
                if (len > max) max = len;
                index += s.substring(index, s.length - 1).indexOf(s[i]);
                completed = false;
                break;
            } else {
                chars.add(s[i]);
                len++;
            }
        }
        if (completed) {
            index = s.length;
            if (chars.size > max) max = chars.size;
        } else index++;
    }
    return max;
};

var lengthOfLongestSubstring_ = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1);
    }
    return maxSize;
};

console.log(lengthOfLongestSubstring('abcdefbghidjklmnoprstuvyz'));
console.log(lengthOfLongestSubstring(' '));
