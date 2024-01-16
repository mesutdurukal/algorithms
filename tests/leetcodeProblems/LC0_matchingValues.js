const matchingKey = (array1, array2) => {
    let obj1 = [];
    for (let i = 0; i < array1.length; i++) {
        obj1[array1[i]] = true;
    }

    for (let j = 0; j < array2.length; j++) {
        if (obj1[array2[j]]) return true;
    }
    return false;
};

console.log(matchingKey([1, 2, 3, 4], [5]));
