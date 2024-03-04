const reverseString = (str) => {
    if (str === '') return '';
    else return reverseString(str.substring(1)) + str.charAt(0);
};

function reverse(str) {
    const rev = (str) => {
        if (str.length == 1) return str;
        return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
    };

    return Number(rev(str.toString()));
}

console.log(reverse(123));
console.log(reverseString('deneme'));
