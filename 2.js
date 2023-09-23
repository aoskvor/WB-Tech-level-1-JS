  // Функция, решающая данную задачу, может выглядеть следующим образом:


function isStrangeNumber(num) {
  let sumOfDivisors = 0;

  // Находим сумму всех делителей числа
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sumOfDivisors += i;
    }
  }

  // Проверяем, является ли число странным
  if (sumOfDivisors === num) {
    return true;
  } else {
    return false;
  }
}

// Пример использования функции
console.log(isStrangeNumber(6)); // true, так как 6 = 1 + 2 + 3
console.log(isStrangeNumber(12)); // false, так как 12 != 1 + 2 + 3 + 4 + 6
console.log(isStrangeNumber(28)); // true, так как 28 = 1 + 2 + 4 + 7 + 14


// Функция `isStrangeNumber` принимает число `num` и поочерёдно проверяет все числа от 1 до `num - 1` на делимость с `num`. Если число делится без остатка, то оно является делителем числа `num`, и его значение добавляется к переменной `sumOfDivisors`. Затем функция сравнивает значение `sumOfDivisors` с числом `num`. Если они равны, то функция возвращает `true`, иначе - `false`.
