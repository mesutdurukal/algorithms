/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues__ = function (arr) {
    let len = arr.length;
    let sum = 0;
    while (len > 0) {
        for (let i = 0; i < arr.length / 2; i++) {
            let temp1 = arr.shift();
            let temp2 = arr.shift();
            let mult = temp1 * temp2;
            sum += mult;
            arr.unshift(mult);
        }
        len = Math.floor(len / 2);
    }
    return sum;
};

var mctFromLeafValues = function (arr) {
    // Initialize a stack to store elements
    let stack = [];
    // Initialize a variable to store the minimum cost
    let res = 0;

    // Iterate through each element in the array
    arr.forEach((val) => {
        // While the stack is not empty and the top element is less than or equal to the current element
        while (stack.length && stack.at(-1) <= val) {
            // Pop the top element from the stack
            let min = stack.pop();
            // Calculate the minimum cost of combining the popped element and the current element
            res += min * Math.min(val, stack.at(-1) ?? Infinity);
        }
        // Push the current element onto the stack
        stack.push(val);
    });
    // Iterate through the remaining elements in the stack
    for (let i = 1; i < stack.length; i++) {
        // Calculate the cost of combining consecutive elements in the stack
        res += stack[i] * stack[i - 1];
    }
    // Return the minimum cost
    return res;
};

mctFromLeafValues([6, 2, 4]);
mctFromLeafValues([6, 2, 4, 1, 2, 3, 4, 5]);

/*

            30

     24           15

  12    4      6     20

[6, 2, 4, 1, 2, 3, 4, 5]


 */
