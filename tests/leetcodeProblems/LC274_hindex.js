/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    if (citations.length == 1) {
        if (citations[0] > 0) return 1;
        else return 0;
    } else {
        citations.sort(function (a, b) {
            return a - b;
        });
        for (let i = 0; i < citations.length; i++) {
            if (citations[citations.length - 1 - i] < i + 1) return i;
        }
        return citations.length;
    }
};

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
console.log(hIndex([4, 4, 0, 0]));
console.log(hIndex([11, 15]));
