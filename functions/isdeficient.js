function isDeficient(number) {
  const factors = factorize(number);
  const sum = factors.reduce((total, factor) => total + factor, 0);
  return sum < number * 2;
}
