/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku_ = function (board) {
    for (let i = 0; i < 9; i++) {
        let row = board[i];
        let rowSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (row[j] != '.') {
                if (rowSet.has(row[j])) {
                    return false;
                } else rowSet.add(row[j]);
            }
        }
        if (rowSet.length == 0) return false;
    }

    for (let i = 0; i < 9; i++) {
        let columnSet = new Set();
        for (let j = 0; j < 9; j++) {
            let val = board[j][i];
            if (val != '.') {
                if (columnSet.has(val)) {
                    return false;
                } else columnSet.add(val);
            }
        }
        if (columnSet.length == 0) return false;
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let gridSet = new Set();
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    let val = board[j * 3 + l][i * 3 + k];
                    if (val != '.') {
                        if (gridSet.has(val)) {
                            return false;
                        } else gridSet.add(val);
                    }
                }
            }
            if (gridSet.length == 0) {
                return false;
            }
        }
    }

    return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rows = [];
    const cols = [];
    const boxes = [];
    for (let i = 0; i < 9; i++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }

    for (let i = 0; i < 9; i++) {
        //rows
        for (let j = 0; j < 9; j++) {
            //columns
            const val = board[i][j];
            if (val !== '.') {
                if (
                    rows[i].has(val) ||
                    cols[j].has(val) ||
                    boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(val)
                ) {
                    return false;
                } else {
                    rows[i].add(val);
                    cols[j].add(val);
                    boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(val);
                }
            }
        }
    }

    return true;
};

isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
]);
