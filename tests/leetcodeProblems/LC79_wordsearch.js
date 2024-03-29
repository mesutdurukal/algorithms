/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // if the word[k] existing in board, keep searching up, down, left, right
    var existHelper = function (i, j, k) {
        if (k === word.length) return true;
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1)
            return false;
        if (board[i][j] === word[k]) {
            var tmp = board[i][j];
            board[i][j] = '#';
            if (
                existHelper(i + 1, j, k + 1) ||
                existHelper(i - 1, j, k + 1) ||
                existHelper(i, j + 1, k + 1) ||
                existHelper(i, j - 1, k + 1)
            ) {
                return true;
            }
            board[i][j] = tmp;
        }
    };
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (existHelper(i, j, 0)) return true;
        }
    }

    return false;
};

exist(
    [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
);
