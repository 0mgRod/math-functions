function mode(numbers) {
  const frequency = new Map();
  let maxFrequency = 0;
  let modes = [];
  for (let number of numbers) {
    let count = frequency.get(number) || 0;
    count++;
    frequency.set(number, count);
    if (count > maxFrequency) {
      maxFrequency = count;
      modes = [number];
    } else if (count === maxFrequency) {
      modes.push(number);
    }
  }
  if (maxFrequency === 1) {
    return null;
  }
  return modes;
}
