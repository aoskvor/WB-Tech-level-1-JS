async function asyncFunction() {
    // Асинхронная операция 1
    const result1 = await asyncOperation1();
    console.log(result1);
  
    // Асинхронная операция 2
    const result2 = await asyncOperation2();
    console.log(result2);
  
    // Возвращаем результат
    return result2;
  }
  
  // Пример асинхронных операций
  function asyncOperation1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Результат операции 1');
      }, 1000);
    });
  }
  
  function asyncOperation2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Результат операции 2');
      }, 2000);
    });
  }
  
  // Вызываем асинхронную функцию
  asyncFunction().then(result => {
    console.log(`Результат выполнения асинхронной функции: ${result}`);
  });
//  Здесь функция `asyncFunction` является асинхронной и использует ключевое слово `await` для ожидания выполнения других асинхронных операций `asyncOperation1` и `asyncOperation2`. Она также возвращает результат выполнения последней операции.

// Пример асинхронных операций `asyncOperation1` и `asyncOperation2` просто возвращают промисы, которые разрешаются через некоторое время (в данном случае с помощью `setTimeout`), чтобы имитировать асинхронное выполнение.

// В конце мы вызываем асинхронную функцию `asyncFunction` и внутри блока `then` выводим результат выполнения.
