/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations_ = function (digits) {
    const dict = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyx',
    };
    const addCombinationsForANewDigit = (combinations, s) => {
        if (combinations.length == 0) return s.split('');
        else {
            for (let i = 0; i < combinations.length; i++) {
                addCombinationsForANewDigit(combinations, digits[i]);
            }
        }
    };

    let combinations = [];
    for (let i = 0; i < digits.length; i++) {
        addCombinationsForANewDigit(combinations, digits[i]);
    }
};

var letterCombinations__ = function (digits) {
    if (!digits.length) {
        return [];
    }

    const digitToLetters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const res = [];

    function backtrack(idx, comb) {
        if (idx === digits.length) {
            res.push(comb);
            return;
        }

        for (const letter of digitToLetters[digits[idx]]) {
            backtrack(idx + 1, comb + letter);
        }
    }

    backtrack(0, '');

    return res;
};
const letterCombinations = (digits) => {
    let res = [];
    const digitToLetters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const generatePath = (index, path) => {
        if (index == digits.length) {
            res.push(path);
            return;
        }

        for (let i = 0; i < digitToLetters[digits[index]].length; i++) {
            generatePath(index + 1, path + digitToLetters[digits[index]][i]);
        }
    };

    for (let i = 0; i < digits.length; i++) {
        generatePath(0, '');
    }
    return res;
};

letterCombinations('23');
