function isAbundant(number) {
  function factorize(number) {
    const factors = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  const factors = factorize(number);
  const sum = factors.reduce((total, factor) => total + factor, 0);
  return sum > number * 2;
}
