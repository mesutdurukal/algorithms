/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct_object = function (ransomNote, magazine) {
    let charsMap = new Object();
    if (ransomNote.length > magazine.length) return false;
    for (let i = 0; i < magazine.length; i++) {
        if (!charsMap[magazine[i]]) charsMap[magazine[i]] = 1;
        else charsMap[magazine[i]]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (charsMap[ransomNote[i]] && charsMap[ransomNote[i]] > 0) {
            charsMap[ransomNote[i]]--;
        } else return false;
    }
    return true;
};

var canConstruct = function (ransomNote, magazine) {
    let charsMap = new Map();
    if (ransomNote.length > magazine.length) return false;
    for (let i = 0; i < magazine.length; i++) {
        if (!charsMap.has(magazine[i])) charsMap.set(magazine[i], 1);
        else charsMap.set(magazine[i], charsMap.get(magazine[i]) + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (charsMap.has(ransomNote[i]) && charsMap.get(ransomNote[i]) > 0) {
            charsMap.set(ransomNote[i], charsMap.get(ransomNote[i]) - 1);
        } else return false;
    }
    return true;
};

canConstruct('aa', 'aab');
