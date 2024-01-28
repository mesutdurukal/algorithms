const fillColumns = (s, numRows) => {
    let rounds = s.length / (numRows + numRows - 2);
    let cols = [[]];
    let col = 0;

    for (let round = 0; round < rounds - 1; round++) {
        for (let i = 0; i < numRows; i++) {
            cols[col].push(s[i + round * (numRows + numRows - 2)]);
            if (i > 0 && i < numRows - 1) {
                cols.push([]);
                cols[col + i].push(
                    s[i + round * (numRows + numRows - 2) + numRows - 1]
                );
            }
        }
        cols.push([]);
        col = col + numRows - 1;
    }
    let index = Math.floor(rounds) * (numRows + numRows - 2);
    for (let i = 0; i < Math.min(numRows, s.length - index); i++)
        cols[col].push(s[i + index]);
    index += numRows;
    while (index < s.length) {
        cols.push([]);
        col = col + numRows - 1;
        cols[col].push(s[index]);
        index++;
    }

    return cols;
};

const readBack = (cols, rowNumber) => {
    let str = '';
    for (let i = 0; i < rowNumber; i++) {
        for (let j = 0; j < cols.length; j++) {
            if (j % (rowNumber - 1) == 0) {
                if (cols[j].length) str += cols[j].shift();
            }
            if (i > 0 && i < rowNumber - 1) {
                if (j % (rowNumber - 1) === rowNumber - 1 - i) {
                    if (cols[j].length) str += cols[j].shift();
                }
            }
        }
    }
    return str;
};

var convert = function (s, numRows) {
    let cols = fillColumns(s, numRows);
    readBack(cols, numRows);
    console.log('hello');
};

console.log(convert('PAYPALISHIRINGXas', 3));
