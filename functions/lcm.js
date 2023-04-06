function lcm(a, b) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  return Math.abs(a * b) / gcd(a, b);
}
