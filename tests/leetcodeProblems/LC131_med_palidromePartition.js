/*

https://leetcode.com/problems/palindrome-partitioning/

Problem: Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Example 1:
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Example 2:
Input: s = "a"
Output: [["a"]]


Constraints:
1 <= s.length <= 16
s contains only lowercase English letters.
*/

const isPalindrome = (str) => str === str.split('').reverse().join('');
const listForAnIndex = [];
let fullList = [];
const partition = (inputString, idx = 0) => {
    if (idx == 0) fullList = [];
    if (idx === inputString.length) {
        fullList.push([...listForAnIndex]);
        return;
    }
    for (let i = idx + 1; i <= inputString.length; i++) {
        let startingSlice = inputString.substring(idx, i);
        if (isPalindrome(startingSlice)) {
            listForAnIndex.push(startingSlice);
            partition(inputString, i);
            listForAnIndex.pop();
        }
    }
    return fullList;
};

console.log(partition('aab'));
console.log(partition('a'));
