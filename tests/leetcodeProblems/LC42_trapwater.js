var trap = function (height) {
    let max1 = 0;
    //create left array so that we find the maximum element on its left...
    let left = [height.length];
    // Scan every element from left to right...
    for (let i = 0; i < height.length; i++) {
        // Find maximum element on its left...
        if (max1 < height[i]) {
            max1 = height[i];
        }
        left[i] = max1;
    }

    let max2 = 0;
    //create right array so that we find the maximum element on its right...
    let right = [height.length];
    // Scan every element from right to left...
    for (let i = height.length - 1; i >= 0; i--) {
        // Find maximum element on its left...
        if (max2 < height[i]) {
            max2 = height[i];
        }
        right[i] = max2;
    }

    // To store the maximum water that can be stored..
    let trap = 0;
    // Scan and Calculate maximum trapped water...
    for (let i = 0; i < height.length; i++) {
        trap += Math.min(left[i], right[i]) - height[i];
    }
    return trap; //return the amount..
};

console.log(trap([4, 2, 0, 3, 2, 5])); //9
