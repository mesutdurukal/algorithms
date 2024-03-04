var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const m = num1.length,
        n = num2.length,
        res = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 = i + j,
                p2 = i + j + 1;
            let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10);
        }
    }
    if (res[0] === 0) res.shift();
    return res.join('');
};

var multiply__ = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            sum =
                sum +
                10 ** (j + i) *
                    (Number(num1[num1.length - 1 - i]) *
                        Number(num2[num2.length - 1 - j]));
        }
    }
    return sum.toString();
};

multiply('123456789', '987654321');
