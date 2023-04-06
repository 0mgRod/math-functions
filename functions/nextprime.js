function nextPrime(number) {
  let candidate = number + 1;
  while (true) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(candidate); i++) {
      if (candidate % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return candidate;
    }
    candidate++;
  }
}
