var longestCommonPrefix__ = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let ans = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === '') {
                return '';
            }
        }
    }
    return ans;
};

var longestCommonPrefix = function (strs) {
    let index = 0;
    let firstChar = strs[0][0];
    let pref = '';
    while (index < strs[0].length) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][index] == firstChar) {
            } else {
                return pref;
            }
        }
        pref += firstChar;
        index++;
        firstChar = strs[0][index];
    }
    return pref;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['asder', 'er', 'dfer']));
