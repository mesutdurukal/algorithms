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

console.log(bubbleSort([4, 8, 2, 5, 6, 9, 3, 5, 5, 1, 2, 3, 9]));
