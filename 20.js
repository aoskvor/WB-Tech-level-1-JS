function calculateLocalStorageSize() {
    var totalSize = 0;
    for (var key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        totalSize += (localStorage[key].length * 2); // умножаем на 2, так как JavaScript использует UTF-16, каждый символ занимает 2 байта
      }
    }
  
    console.log(totalSize + " bytes / " + (5 * 1024 * 1024) + " bytes"); // выводим размер занятой памяти / максимальный размер хранилища
  }
  
  calculateLocalStorageSize();
  
  // Далее добавляем обработчик события, который будет вызываться каждый раз, когда изменяются данные в localStorage
  window.addEventListener("storage", calculateLocalStorageSize);
  