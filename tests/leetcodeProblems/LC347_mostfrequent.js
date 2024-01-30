const bubbleSort = (frequencies, keys, k) => {
    for (let j = 0; j < k; j++) {
        for (let i = 0; i < frequencies.length - 1 - j; i++) {
            if (frequencies[i] > frequencies[i + 1]) {
                let temp = frequencies[i];
                frequencies[i] = frequencies[i + 1];
                frequencies[i + 1] = temp;
                temp = keys[i];
                keys[i] = keys[i + 1];
                keys[i + 1] = temp;
            }
        }
    }
    return keys.slice(keys.length - k, keys.length).reverse();
};

const findMaxFrequencyElements_ = (arry, k) => {
    let freqMap = new Map();
    for (let i = 0; i < arry.length; i++) {
        if (freqMap.has(arry[i]))
            freqMap.set(arry[i], freqMap.get(arry[i]) + 1);
        else freqMap.set(arry[i], 1);
    }

    const frequencies = Array.from(freqMap.values());
    const keys = Array.from(freqMap.keys());

    return bubbleSort(frequencies, keys, k);
};

var findMaxFrequencyElements = function (nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    for (let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i]);
        if (result.length === k) break;
    }
    return result;
};

console.log(findMaxFrequencyElements([2, 2, 2, 3, 3, 1, 1, 1, 1], 2));
console.log(findMaxFrequencyElements([1, 1, 1, 2, 2, 3], 2));
