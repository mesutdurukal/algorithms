const selectionSort = (arr1) => {
    // each time exchange min with the index and increment index.
    for (let i = 0; i < arr1.length; i++) {
        let min = arr1[i];
        let minIndex = i;
        // Detect min in the list
        for (let j = i; j < arr1.length; j++) {
            if (arr1[j] < min) {
                min = arr1[j];
                minIndex = j;
            }
        }
        // Pull that min to the beginning
        let temp = arr1[i];
        arr1[i] = min;
        arr1[minIndex] = temp;
    }
    return arr1;
};

console.log(selectionSort([4, 8, 2, 5, 6, 9, 3, 5, 5, 1, 2, 3, 9]));
