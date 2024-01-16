/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let str = '';
    let remaining = num;
    let Ms = Math.floor(num / 1000);
    for (let i = 0; i < Ms; i++) {
        str += 'M';
    }
    remaining -= Ms * 1000;

    let Cs = Math.floor(remaining / 100);
    if (Cs == 9) str += 'CM';
    else if (Cs == 4) str += 'CD';
    else {
        for (let i = 0; i < Math.floor(Cs / 5); i++) {
            str += 'D';
        }
        for (let i = 0; i < Cs % 5; i++) {
            str += 'C';
        }
    }
    remaining -= Cs * 100;

    let Xs = Math.floor(remaining / 10);
    if (Xs == 9) str += 'XC';
    else if (Xs == 4) str += 'XL';
    else {
        for (let i = 0; i < Math.floor(Xs / 5); i++) {
            str += 'L';
        }
        for (let i = 0; i < Xs % 5; i++) {
            str += 'X';
        }
    }
    remaining -= Xs * 10;

    if (remaining == 9) str += 'IX';
    else if (remaining == 4) str += 'IV';
    else {
        for (let i = 0; i < Math.floor(remaining / 5); i++) {
            str += 'V';
        }
        for (let i = 0; i < remaining % 5; i++) {
            str += 'I';
        }
    }
    return str;
};

//console.log(intToRoman(3)); // III
console.log(intToRoman(58)); // "LVIII"
