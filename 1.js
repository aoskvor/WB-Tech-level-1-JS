//Вот пример кода на JavaScript, который проверяет, является ли заданная строка палиндромом:

function isPalindrome(str) {
  // Преобразуем строку в нижний регистр и удаляем все непечатаемые символы
  str = str.toLowerCase().replace(/[^a-zа-яё\d]/g, '');

  // Проверяем, равна ли строка перевернутой версии самой себя
  return str === str.split('').reverse().join('');
}

// Пример использования функции
console.log(isPalindrome("аргентина манит негра")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true


//Функция `isPalindrome` преобразует строку `str` в нижний регистр и удаляет все непечатаемые символы с помощью регулярного выражения `/[^a-zа-яё\d]/g`. Затем она сравнивает полученную строку с ее перевернутой версией, используя методы `split`, `reverse` и `join` для работы с массивами символов. Если строки равны, то функция возвращает `true`, в противном случае – `false`.
//Приведенные примеры использования функции выше показывают, что строка "аргентина манит негра" является палиндромом, в то время как строки "hello" и "racecar" не являются палиндромами.


