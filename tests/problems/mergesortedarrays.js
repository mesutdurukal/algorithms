/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

const merge = (nums1, m, nums2, n) => {
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    } else if (n > 0) {
        // copy first part of arr1
        let arr3 = nums1.slice(0, m);
        // start filling arr1 from beginning
        let index = 0;
        while (arr3.length && nums2.length) {
            // pick min of first index from two arrays
            if (arr3[0] < nums2[0]) nums1[index] = arr3.shift();
            else nums1[index] = nums2.shift();
            index++;
        }
        if (arr3.length) {
            for (let i = index; i < m + n; i++) {
                nums1[i] = arr3.shift();
            }
        }
        if (nums2.length) {
            for (let i = index; i < m + n; i++) {
                nums1[i] = nums2.shift();
            }
        }
    }
};

const keepOriginal = function () {
    let a = [1, 2, 3];
    //let b = a; // this points to the same object

    //let b = [...a];   // this duplicates
    let b = a.slice(0); // this also duplicates

    b.splice(0, 1);
    console.log(a);
};

const changeOriginalFail = function (a) {
    a = [2, 4]; // doesnt change original
};

const changeOriginalYeah = function (a) {
    a[0] = 3; // changes original
    a.shift(); // changes original
    a.push(5);
    a = [1, 1]; // no effect
};

let a = [1, 2, 3, 0, 0, 0];
merge(a, 3, [2, 5, 6], 3);
/*let nums1 = [0];
merge([0], 0, [1], 1);

// pointer
keepOriginal();

// change the reference, which does not affect the original scope
a = [1, 2, 4];
changeOriginalFail(a);
console.log(a);
changeOriginalYeah(a);*/
console.log(a);
