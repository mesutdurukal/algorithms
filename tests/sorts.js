const bubbleSort_ = (array1) => {
    let notSortedYet = true;
    while (notSortedYet) {
        let switchCount = 0;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] > array1[i + 1]) {
                let temp = array1[i];
                array1[i] = array1[i + 1];
                array1[i + 1] = temp;
                switchCount++;
            }
        }
        if (!switchCount) notSortedYet = false;
    }
    return array1;
};

const bubbleSort = (array1) => {
    for (let j = 0; j < array1.length - 1; j++) {
        // this is same as above ,we just know that this loop will iterate length-1 times
        for (let i = 0; i < array1.length - 1 - j; i++) {
            // each time 1 biggest number goes to end.
            // (1st iter: 1st biggest, 2nd iter: 2nd biggest goes to 2n last position etc.)
            // so, no need to cover the last X chars, which were already set in previous iterations.
            if (array1[i] > array1[i + 1]) {
                let temp = array1[i];
                array1[i] = array1[i + 1];
                array1[i + 1] = temp;
            }
        }
    }
    return array1;
};

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

const mergeSort = (a) => {
    let c = divide(a);
    let d = sortByMerge(c);
    return d;
};

const swap = (array, i, j) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);

        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
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

const merge = (a1, a2) => {
    let a = [];
    let a1_index = 0;
    let a2_index = 0;
    while (a1_index < a1.length && a2_index < a2.length) {
        if (a1[a1_index] < a2[a2_index]) {
            a.push(a1[a1_index]);
            a1_index++;
        } else {
            a.push(a2[a2_index]);
            a2_index++;
        }
    }
    if (a1_index < a1.length) a = a.concat(a1.slice(a1_index, a1.length));
    else if (a2_index < a2.length) a = a.concat(a2.slice(a2_index, a2.length));
    return a;
};

const merge_ = (a1, a2) => {
    let a = [];
    if (a1.length == 0 && a2.length == 0) return [];
    else if (a1.length == 0) return a2;
    else if (a2.length == 0) return a1;
    else if (a1.length == 1 && a2.length == 1) {
        if (a1[0] < a2[0]) return a1.concat(a2);
        else return a2.concat(a1);
    } else {
        let temp1 = a1.shift();
        let temp2 = a2.shift();
        while (a1.length > 0 || a2.length > 0) {
            if (a1.length == 0) a.push(a2.shift());
            else if (a2.length == 0) a.push(a1.shift());
            else if (temp1 < temp2) {
                a.push(temp1);
                temp1 = a1.shift();
            } else {
                a.push(temp2);
                temp2 = a2.shift();
            }
        }
        return a;
    }
};

const breakInHalf = (array) => {
    let a1 = [];
    let a2 = [];
    let midPoint = Math.ceil(array.length / 2);

    let i;
    for (i = 0; i < midPoint; i++) a1.push(array[i]);
    for (i = midPoint; i < array.length; i++) a2.push(array[i]);

    let a = [];
    a[0] = a1;
    if (a2.length) a[1] = a2;
    return a;
};

const sortByMerge = (bunchOfArrays) => {
    while (bunchOfArrays.length != 1) {
        let higherLevel = [];
        for (let i = 0; i < bunchOfArrays.length; i++) {
            let newArrays;
            if (i == bunchOfArrays.length - 1) {
                newArrays = bunchOfArrays[i];
            } else newArrays = merge(bunchOfArrays[i], bunchOfArrays[i + 1]);
            higherLevel.push(newArrays);
            i = i + 1;
        }
        bunchOfArrays = higherLevel;
    }
    return bunchOfArrays;
};

const divide = (array) => {
    let listOfArrays = [];
    listOfArrays.push(array);
    let len = array.length;

    while (listOfArrays.length < len) {
        let innerLevel = [];
        for (let i = 0; i < listOfArrays.length; i++) {
            let innerArrays = breakInHalf(listOfArrays[i]);
            innerLevel = innerLevel.concat(innerArrays);
        }
        listOfArrays = innerLevel;
    }
    return listOfArrays;
};

let arr1 = [8, 5, 9, 3, 5, 2, 9];
let arr2 = [4, 2, 6, 5, 1, 3];
//console.log(insertionSort(arr1));
//console.log(insertionSort(arr2));
let a = merge(arr1, arr2);
//console.log(a);
//let b = breakInHalf(a);
//console.log(b);
//let c = divide(a);
//let d = sortByMerge(c);
//console.log(d);
//console.log(mergeSort(a));
console.log(quickSort(a, 0, a.length - 1));
