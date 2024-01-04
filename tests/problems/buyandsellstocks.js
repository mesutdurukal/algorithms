/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_ = function (prices) {
    let buyDay = 0;
    let waitTime = 1;

    let profit = 0;
    while (buyDay <= prices.length) {
        if (prices[buyDay + waitTime] - prices[buyDay] > profit)
            profit = prices[buyDay + waitTime] - prices[buyDay];
        waitTime++;
        if (waitTime > prices.length - buyDay) {
            buyDay++;
            waitTime = 1;
        }
    }
    return profit;
};

const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]; // our current profit

            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
};
