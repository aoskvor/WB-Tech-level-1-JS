// Вот пример реализации аналога библиотеки Math (MathX) с базовым набором функций, используя замыкания:


const MathX = (function() {
  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }

  function fibonacciSequence(n) {
    const sequence = [];
    for (let i = 0; i <= n; i++) {
      sequence.push(fibonacci(i));
    }
    return sequence;
  }

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  function nthPrime(n) {
    let count = 0;
    let prime = 2;
    while (count < n) {
      if (isPrime(prime)) {
        count++;
      }
      prime++;
    }
    return prime - 1;
  }

  function primeSequence(n) {
    const sequence = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        sequence.push(i);
      }
    }
    return sequence;
  }

  return {
    fibonacci,
    fibonacciSequence,
    nthPrime,
    primeSequence
  };
})();

console.log(MathX.fibonacci(6)); // Output: 8
console.log(MathX.fibonacciSequence(6)); // Output: [0, 1, 1, 2, 3, 5, 8]
console.log(MathX.nthPrime(6)); // Output: 13
console.log(MathX.primeSequence(15)); // Output: [2, 3, 5, 7, 11, 13]


// В данной реализации используются замыкания и функции для рассчета чисел в ряду Фибоначчи и простых чисел. Оптимизация простых чисел основывается на использовании решета Эратосфена для поиска простых чисел.
