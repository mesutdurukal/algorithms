/*
Problem: Find substrings which has a groups of consecutive 0s and 1s
with the same number of members.


Example

Input s = "011001"
Output i the number of substrings "01", "10", "1100", and "01" --> 4

*/

function findNumberOfSubstrings(binaryString) {
    // a group is a substring having consecutive 0s or consecutive 1s
    let prevGroup = 0;
    let lenOfGroup = 1;

    // overlap is the minimum of lengths of 2 groups, for ex. if group1 is size:2 and group2 is size:3 -> overlap is 2
    // in the meantime, size of overlap equals to the number of substrings having symmetric groups.
    // for ex, 1100 (overlap 2) -> substrings are: 1100 and 10 (number of substrings is also 2)
    let overlapOfGroups = 0;

    for (let i = 1; i < binaryString.length; i++) {
        if (binaryString[i] == binaryString[i - 1]) {
            //increase the length of the group
            lenOfGroup += 1;
        } else {
            // value change; switch to next group
            overlapOfGroups += Math.min(lenOfGroup, prevGroup); //
            prevGroup = lenOfGroup; // assign this group as previous for the next iteration
            lenOfGroup = 1; // reset (size-1) the length of substring for the next iteration
        }
    }

    overlapOfGroups += Math.min(lenOfGroup, prevGroup);
    return overlapOfGroups;
}

function binaryString_(binaryString) {
    let numberOfSubStrings = 0;
    // scan from start to end
    for (let index = 0; index < binaryString.length - 1; index++) {
        let subIndex = index;
        // detect the first group: 0s or 1s grouped together
        let countFirstGroup = 1;
        while (binaryString[subIndex + 1] === binaryString[subIndex]) {
            countFirstGroup++;
            subIndex++;
        }
        subIndex++;

        // detect the second group
        let countSecondGroup = 1;
        if (subIndex === binaryString.length) {
            countSecondGroup = 0;
        } else
            while (binaryString[subIndex + 1] === binaryString[subIndex]) {
                countSecondGroup++;
                subIndex++;
            }

        // Equal check of 2 groups
        if (countSecondGroup >= countFirstGroup) {
            console.log(
                `substring found at index: ${index}, size of groups: ${countFirstGroup}`
            );
            numberOfSubStrings++;
        }
    }
    return numberOfSubStrings;
}

//console.log(findNumberOfSubstrings('011001')); // 01, 1100, 10, 01
//console.log(binaryString('10'));
console.log(findNumberOfSubstrings('11111000000'));
