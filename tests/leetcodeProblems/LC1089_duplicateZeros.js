var duplicateZeros = function (arr) {
    const fixedL = arr.length;
    for (let i = 0; i < fixedL; i++) {
        if (arr[i] == 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
    arr.slice(2, 3);
    arr.shift();
    arr.splice(3, 0, 0);
    arr.splice(3, 1, 0);
    arr.splice(3, 1);
    arr.pop(5);
    arr.push(5);
    arr.shift(5);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
