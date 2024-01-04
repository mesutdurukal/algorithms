/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let stIndex = 0;
    let endIndex = height.length - 1;
    let totalWater = 0;
    while (endIndex > stIndex) {
        let a =
            (endIndex - stIndex) * Math.min(height[stIndex], height[endIndex]);
        if (a > totalWater) totalWater = a;
        height[stIndex] <= height[endIndex] ? stIndex++ : endIndex--; //pick min of start & end to move
    }
    return totalWater;
};
