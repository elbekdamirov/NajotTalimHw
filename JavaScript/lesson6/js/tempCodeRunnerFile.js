const numbers = [12, 34, 556, 67, 23, 1456, 100];

function findSum(num) {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}

for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (findSum(numbers[i]) > findSum(numbers[j])) {
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }
}

console.log(numbers);
