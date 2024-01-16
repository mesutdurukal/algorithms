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

const mergeSort_ = (a) => {
    let c = divide(a);
    let d = sortByMerge(c);
    return d;
};

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Already sorted if the array has 0 or 1 element
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

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

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add remaining elements from both arrays (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([4, 8, 2, 5, 6, 9, 3, 5, 5, 1, 2, 3, 9]));
