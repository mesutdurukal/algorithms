/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let len = board.length;
    let rows = new Array(len).fill().map(() => new Set());
    let columns = new Array(len).fill().map(() => new Set());
    let grids = new Array(len).fill().map(() => new Set());
    let dots = [];

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let val = board[i][j];
            if (val != '.') {
                let grid = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                rows[i].add(val);
                columns[j].add(val);
                grids[grid].add(val);
            } else {
                let dot = i * 9 + j;
                dots.push(dot);
            }
        }
    }

    let dotsLen = dots.length;
    let potVals = new Array(dotsLen).fill().map(() => new Set());
    for (let i = 0; i < dotsLen; i++) {
        let coor = dots[i];
        let row = Math.floor(coor / 9);
        let col = coor - row * 9;
        let grid = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        rows[row].forEach((value) => potVals[i].add(value));
        columns[col].forEach((value) => potVals[i].add(value));
        grids[grid].forEach((value) => potVals[i].add(value));
    }

    for (let i = 0; i < dotsLen; i++) {
        let coor = dots[i];
        let row = Math.floor(coor / 9);
        let col = coor - row * 9;
        let grid = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        rows[row].forEach((value) => potVals[i].add(value));
        columns[col].forEach((value) => potVals[i].add(value));
        grids[grid].forEach((value) => potVals[i].add(value));
    }
};

solveSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]);
