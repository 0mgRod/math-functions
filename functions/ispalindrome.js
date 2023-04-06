function isPalindrome(number) {
  const reversed = Number(String(number).split('').reverse().join(''));
  return number === reversed;
}
