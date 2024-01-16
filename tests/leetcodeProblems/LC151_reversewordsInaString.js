/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const wordsList = s.split(' ');
    const numberOfWords = wordsList.length;
    let newString = '';
    for (let i = 0; i < numberOfWords; i++) {
        let nextWord = wordsList[numberOfWords - i - 1];
        if (nextWord != '') newString = newString.concat(' ', nextWord);
    }
    return newString.slice(1);
};

// eslint-disable-next-line no-undef
console.log(reverseWords('mesut  durukal   test'));
