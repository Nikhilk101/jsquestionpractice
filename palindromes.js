// Function to check if a given string is a palindrome using recursion
function isPalindrome(str) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters are equal
    if (str[0] !== str[str.length - 1]) {
      return false;
    } else {
      // Recursively check the substring excluding the first and last characters
      return isPalindrome(str.slice(1, -1));
    }
  }
  
  // Test the function with different input strings
  console.log(isPalindrome("madam")); // Output: true (palindrome)
  console.log(isPalindrome("abdb"));  // Output: false (not a palindrome)
  console.log(isPalindrome("ab"));    // Output: false (not a palindrome)
  console.log(isPalindrome("a"));     // Output: true (palindrome)
  