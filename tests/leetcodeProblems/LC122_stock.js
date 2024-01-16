/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let alreadyIncreasing = false;
    let start;
    let stop;
    let total = 0;
    let prevValue = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prevValue && !alreadyIncreasing) {
            start = prevValue;
            alreadyIncreasing = true;
        }
        if (prices[i] < prevValue && alreadyIncreasing) {
            stop = prevValue;
            total += stop - start;
            alreadyIncreasing = false;
        }
        if (i == prices.length - 1 && alreadyIncreasing) {
            total += prices[i] - start;
        }
        prevValue = prices[i];
    }
    return total;
};

console.log(maxProfit([1, 2, 3, 4, 5]));
