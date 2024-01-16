let dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
var romanToInt = function (s) {
    let currentVal;
    let totalVal = 0;
    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        currentVal = dict[currentChar];
        if (i != s.length) {
            if (
                (currentChar === 'I' &&
                    (s[i + 1] === 'V' || s[i + 1] === 'X')) ||
                (currentChar === 'X' &&
                    (s[i + 1] === 'L' || s[i + 1] === 'C')) ||
                (currentChar === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))
            )
                currentVal = currentVal * -1;
        }
        totalVal += currentVal;
    }
    return totalVal;
};
