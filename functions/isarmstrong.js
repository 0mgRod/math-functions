function isArmstrong(number) {
  const digits = String(number).split('');
  const numDigits = digits.length;
  const sum = digits.reduce((total, digit) => total + Math.pow(digit, numDigits), 0);
  return sum === number;
}
