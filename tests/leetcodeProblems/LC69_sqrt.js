var mySqrt = function (x) {
    if (x == 0) return 0;
    if (x == 1) return 1;
    let res = 0;
    const findMax = (base) => {
        if ((base + 1) * (base + 1) > x) {
            return base;
        }
        let min = 1;
        while (res < x - 1) {
            res = (base + min) * (base + min);
            min = min * 2;
        }
        if (res == x) {
            return min / 2;
        }
        res = 0;
        return findMax(base + min / 4);
    };

    return findMax(0);
};

let a = mySqrt(8);
let b = 5;
