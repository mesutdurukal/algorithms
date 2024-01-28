/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    else {
        let text = x.toString();
        for (let i = 0; i < text.length / 2; i++) {
            if (text[i] != text[text.length - i - 1]) return false;
        }
        return true;
    }
};

console.log(isPalindrome(121));
