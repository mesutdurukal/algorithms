const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);

        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
};

const swap = (array, i, j) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};

const pivot = (array, pivotIndex = 0, endindex = array.length - 1) => {
    // group smaller items and bigger items
    let swapIndex = pivotIndex;
    for (let j = pivotIndex + 1; j <= endindex; j++) {
        if (array[j] < array[pivotIndex]) {
            // when a smaller item is found, swap and move the edge by one spot.
            swapIndex++;
            swap(array, swapIndex, j);
        }
    }
    // move the item to the relevant spot btw two groups
    swap(array, swapIndex, pivotIndex);
    return swapIndex;
};

console.log(quickSort([4, 8, 2, 5, 6, 9, 3, 5, 5, 1, 2, 3, 9]));
