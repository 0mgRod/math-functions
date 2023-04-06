function previousPrime(number) {
  if (number < 2) {
    return null;
  }
  for (let i = number - 1; i >= 2; i--) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    }
  }
  return null;
}
