/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert_ = function (s, numRows) {
    const charList = s.split('');
    const charsLen = charList.length;
    const lenTriangle = numRows * 2 - 2;
    let cols = [];
    let colsIndex = -1;
    for (let i = 0; i < charsLen; i++) {
        if (i % lenTriangle == 0) {
            cols.push([]);
            colsIndex++;
            cols[colsIndex].push(charList[i]);
        } else if (i % lenTriangle > numRows - 1) {
            cols.push([]);
            colsIndex++;
            cols[colsIndex][numRows - 1 - (colsIndex % numRows)] = charList[i];
        } else {
            cols[colsIndex].push(charList[i]);
        }
    }
    let finalString = '';
    for (let r = 0; r < numRows; r++) {
        for (let j = 0; j < cols.length; j++) {
            if (cols[j][r]) finalString = finalString.concat('', cols[j][r]);
        }
    }
    return finalString;
};

// JavaScript code block for the approach

var convert = function (inputString, numRows) {
    if (numRows === 1) return inputString;

    const rows = new Array(Math.min(numRows, inputString.length)).fill('');
    let direction = -1;
    let currentRow = 0;

    for (const char of inputString) {
        rows[currentRow] += char;
        currentRow += direction === -1 ? 1 : -1;

        if (currentRow === 0 || currentRow === numRows - 1) {
            direction = -direction;
        }
    }

    return rows.join('');
};

// eslint-disable-next-line no-undef
console.log(convert('PAYPALISHIRING', 4));
