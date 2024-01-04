/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome_ = function (s) {
    const replaced = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let stIndex = 0;
    let endIndex = replaced.length - 1;
    while (stIndex < endIndex) {
        if (replaced[stIndex] != replaced[endIndex]) return false;
        stIndex++;
        endIndex--;
    }
    return true;
};

var isPalindrome = function (str) {
    const replaced = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let len = str.length;
    let half = Math.floor(len /2)
    for (let i=0; i< half; i++) {
        if (replaced[i] != replaced[len-1-i]) return false;
    }
    return true;
};

const functions = {
    isPalindrome,
    isPalindrome_
};

if (process.argv.length <= 3) {
    console.log("Please provide both a function name and a parameter.");
} else {
    // Get the function name and parameter from the command line arguments
    const functionName = process.argv[2];
    const parameter = process.argv[3];

    console.log(functions[functionName](parameter))
}


