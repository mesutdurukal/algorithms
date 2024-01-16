const insertionSort = (arr1) => {
    for (let i = 1; i < arr1.length + 1; i++) {
        for (let j = i - 1; j > 0; j--) {
            if (arr1[j] < arr1[j - 1]) {
                let temp = arr1[j - 1];
                arr1[j - 1] = arr1[j];
                arr1[j] = temp;
            } else break;
        }
    }
    return arr1;
};

console.log(insertionSort([4, 8, 2, 5, 6, 9, 3, 5, 5, 1, 2, 3, 9]));
