const fillZeros = (str, maxWidth) => {
    let remainingSpaceOnLine = maxWidth - str.length;
    let words;
    if (str.indexOf(' ') < 0) {
        for (let f = 0; f < remainingSpaceOnLine; f++) {
            str += ' ';
        }
        return str;
    } else {
        words = str.split(' ');
        for (let f = 0; f < remainingSpaceOnLine; f++) {
            words[f % (words.length - 1)] += ' ';
        }
        return words.join(' ');
    }
};

const completeZeros = (str, remainingSpaceOnLine) => {
    for (let f = str.length; f < remainingSpaceOnLine; f++) {
        str += ' ';
    }
    return str;
};

var fullJustify = function (words, maxWidth) {
    let lines = [words[0]];
    let lineIndex = 0;
    let remainingSpaceOnLine = maxWidth - words[0].length;
    for (let i = 1; i < words.length; i++) {
        if (words[i].length >= remainingSpaceOnLine) {
            lines[lineIndex] = fillZeros(lines[lineIndex], maxWidth);

            lineIndex++;
            lines[lineIndex] = '';
            remainingSpaceOnLine = maxWidth;
        }
        if (lines[lineIndex].length > 0) lines[lineIndex] += ' ';
        lines[lineIndex] += words[i];
        remainingSpaceOnLine -= words[i].length + 1;
    }
    lines[lineIndex] = completeZeros(lines[lineIndex], maxWidth);
    return lines;
};

console.log(
    fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)
);
