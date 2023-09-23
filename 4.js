

function changeEnding(number, word) {
    // Check for 11-14 and add 'ей' ending
    if (number % 100 === 11 || number % 100 === 12 || number % 100 === 13 || number % 100 === 14) {
    return `${number} ${word}ей`;
    }
    // Check for 1 and add 'ь' ending
    else if (number % 10 === 1) {
    return `${number} ${word}ь`;
    }
    // Check for 2-4 and add 'я' ending
    else if (number % 10 >= 2 && number % 10 <= 4) {
    return `${number} ${word}я`;
    }
    // Default case, add 'ей' ending
    else {
    return `${number} ${word}ей`;
    }
    }
    
    
  
  // Пример использования
  
  console.log(changeEnding(112, "сообщени")); // 112 сообщений
  console.log(changeEnding(12, "сообщени")); // 12 сообщений
  console.log(changeEnding(1, "сообщение")); // 1 сообщение
  console.log(changeEnding(1024, "пользовател")); // 1024 пользователя
  console.log(changeEnding(1026, "пользовател")); // 1026 пользователей
  console.log(changeEnding(121, "пользовател")); // 121 пользователь
  
  //     Функцию надо упаковать в модуль.
  