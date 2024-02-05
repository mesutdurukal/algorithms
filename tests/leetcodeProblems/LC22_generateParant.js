function generateParenthesis(n) {
    let ans = [];
    function solve(output, open, close) {
        if (open === 0 && close === 0) {
            ans.push(output);
            return;
        }

        if (open > 0) solve(output + '(', open - 1, close);
        if (close > open) solve(output + ')', open, close - 1);
    }

    solve('', n, n);
    return ans;
}

console.log(generateParenthesis(3));
