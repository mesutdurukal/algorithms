/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners_ = function (matches) {
    let winners = [];
    let losers = [];
    let winner;
    let loser;
    for (let i = 0; i < matches.length; i++) {
        winner = matches[i][0];
        if (!winners[winner]) winners[winner] = 1;

        loser = matches[i][1];
        if (losers[loser]) losers[loser] += 1;
        else losers[loser] = 1;
    }

    let nolosers = [];
    let onetimelosers = [];
    for (let i = 0; i < winners.length; i++) {
        if (winners[i] && !losers[i]) nolosers.push(i);
    }
    for (let i = 0; i < losers.length; i++) {
        if (losers[i] == 1) onetimelosers.push(i);
    }
    return [nolosers, onetimelosers];
};

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let zeroLoss = new Set();
    let oneLoss = new Set();
    let moreLoss = new Set();

    for (let match of matches) {
        let winner = match[0];
        let loser = match[1];

        // Add winner.
        if (!oneLoss.has(winner) && !moreLoss.has(winner)) {
            zeroLoss.add(winner);
        }

        // Add or move loser.
        if (zeroLoss.has(loser)) {
            zeroLoss.delete(loser);
            oneLoss.add(loser);
        } else if (oneLoss.has(loser)) {
            oneLoss.delete(loser);
            moreLoss.add(loser);
        } else if (moreLoss.has(loser)) {
            continue;
        } else {
            oneLoss.add(loser);
        }
    }

    let answer = [
        Array.from(zeroLoss).sort((a, b) => a - b),
        Array.from(oneLoss).sort((a, b) => a - b),
    ];

    return answer;
};

console.log(
    findWinners([
        [1, 3],
        [2, 3],
        [3, 6],
        [5, 6],
        [5, 7],
        [4, 5],
        [4, 8],
        [4, 9],
        [10, 4],
        [10, 9],
    ])
);
