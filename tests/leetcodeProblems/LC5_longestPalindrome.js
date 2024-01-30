var longestPalindrome_ = function (s) {
    // Check if the input string is empty, return an empty string if so
    if (s.length === 0) return '';

    // Initialize variables to store the indices of the longest palindrome found
    let longestPalindromeIndices = [0, 0];

    // Loop through the characters in the input string
    for (let i = 0; i < s.length; ++i) {
        // Find the indices of the longest palindrome centered at character i
        let currentIndices = expandAroundCenter(s, i, i);

        // Compare the length of the current palindrome with the longest found so far
        if (
            currentIndices[1] - currentIndices[0] >
            longestPalindromeIndices[1] - longestPalindromeIndices[0]
        ) {
            // Update the longest palindrome indices if the current one is longer
            longestPalindromeIndices = currentIndices;
        }

        // Check if there is a possibility of an even-length palindrome centered at
        // character i and i+1
        if (i + 1 < s.length && s[i] === s[i + 1]) {
            // Find the indices of the longest even-length palindrome centered at characters
            // i and i+1
            let evenIndices = expandAroundCenter(s, i, i + 1);

            // Compare the length of the even-length palindrome with the longest found so
            // far
            if (
                evenIndices[1] - evenIndices[0] >
                longestPalindromeIndices[1] - longestPalindromeIndices[0]
            ) {
                // Update the longest palindrome indices if the even-length one is longer
                longestPalindromeIndices = evenIndices;
            }
        }
    }

    // Extract and return the longest palindrome substring using the indices
    return s.slice(
        longestPalindromeIndices[0],
        longestPalindromeIndices[1] + 1
    );
};

// Helper function to find and return the indices of the longest palindrome
// extended from s[i..j] (inclusive) by expanding around the center
function expandAroundCenter__(s, i, j) {
    // Expand the palindrome by moving outward from the center while the characters match
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--; // Move the left index to the left
        j++; // Move the right index to the right
    }
    // Return the indices of the longest palindrome found
    return [i + 1, j - 1];
}

/**
 * @param {string} s
 * @return {string}
 */

const maxAroundIndex = (s, i) => {
    let left = i;
    let right = i;
    if (i != 0)
        while (s[left - 1] == s[i]) {
            left--;
        }
    if (i != s.length)
        while (s[right + 1] == s[i]) {
            right++;
        }
    if (i != 0 && i != s.length - 1)
        while (s[left - 1] && s[left - 1] == s[right + 1]) {
            left--;
            right++;
        }

    return [left, right];
};

var longestPalindrome = function (s) {
    let maxL = 0;
    let substr = '';
    for (let i = 0; i < s.length; i++) {
        let [left, right] = maxAroundIndex(s, i);
        let l = right - left + 1;
        if (l > maxL) {
            maxL = l;
            substr = s.substring(left, right + 1);
        }
    }
    return substr;
};

console.log(longestPalindrome('bb'));
console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
