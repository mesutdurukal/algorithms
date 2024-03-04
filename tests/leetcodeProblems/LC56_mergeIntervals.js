var merge = function (intervals) {
    let ans = [];
    intervals.sort((a, b) => a[0] - b[0]);

    if (intervals.length === 0) {
        return ans;
    }

    let temp = intervals[0];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= temp[1]) {
            temp[1] = Math.max(temp[1], intervals[i][1]);
        } else {
            ans.push(temp);
            temp = intervals[i];
        }
    }
    ans.push(temp);

    return ans;
};

let ans1 = merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
]);
let ans2 = merge([
    [1, 3],
    [2, 6],
    [5, 10],
    [15, 18],
]);
let x = 5;
