function getMaxLocalStorageSize() {
    try {
      const testKey = 'test';
      let data = '';
  
      // Заполняем данные до заполнения localStorage
      while (true) {
        data += 'x';
        localStorage.setItem(testKey, data);
      }
    } catch (e) {
      // В случае ошибки заполнения localStorage, получаем максимальный размер
      const maxLocalStorageSize = data.length - 1;
      localStorage.removeItem(testKey);
      return maxLocalStorageSize;
    }
  }
  
  const maxLocalStorageSize = getMaxLocalStorageSize();
  console.log(`Максимальный объем данных, который можно записать в localStorage: ${maxLocalStorageSize} байт`);
  
  // Этот код будет пытаться заполнить `localStorage` с помощью ключа `'test'` до тех пор, пока не возникнет ошибка. Затем он вычислит максимальный размер данных, который удалось записать, удалит ключ `'test'` и вернет полученное значение.

// Обратите внимание, что это лишь приближенная оценка максимального объема данных, так как на реальный объем может влиять и другие факторы, такие как настройки браузера, операционная система и т.д.
