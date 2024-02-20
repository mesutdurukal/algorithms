/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length == 1) return [nums];
    else if (nums.length == 2)
        return [
            [nums[0], nums[1]],
            [nums[1], nums[0]],
        ];
    else {
        let wholeList = [];
        for (let i = 0; i < nums.length; i++) {
            let subPerms = permute(
                nums.filter((element, index) => index !== i)
            );
            for (let j = 0; j < subPerms.length; j++) {
                subPerms[j].unshift(nums[i]);
            }
            wholeList = wholeList.concat(subPerms);
        }
        return wholeList;
    }
};

permute([1, 5, 3]);
