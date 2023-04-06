function fibonacci(length) {
  let sequence = [0, 1];
  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence;
}
