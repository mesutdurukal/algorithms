/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

const dropLeadingZeros = (str) => {
    let i;
    for (i = 0; i < str.length - 1; i++) {
        if (str[i] != '0') break;
    }
    return str.substring(i, str.length);
};

var compareVersion = function (version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const longLen = Math.max(v1.length, v2.length);
    for (let i = 0; i < longLen; i++) {
        v1[i] = v1[i] != undefined ? v1[i] : '0';
        v2[i] = v2[i] != undefined ? v2[i] : '0';
        if (Number(dropLeadingZeros(v1[i])) < Number(dropLeadingZeros(v2[i])))
            return -1;
        if (Number(dropLeadingZeros(v1[i])) > Number(dropLeadingZeros(v2[i])))
            return 1;
    }
    return 0;
};

let a = compareVersion('123', '321');
console.log('');
