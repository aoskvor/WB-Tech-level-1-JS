// Функция для преобразования JSON в связный список
function jsonToList(json) {
    // Парсим JSON
    const data = JSON.parse(json);
  
    // Создаем переменную для хранения головы списка
    let head = null;
    
    // Создаем переменную для хранения текущего узла списка
    let currentNode = null;
  
    // Проходим по каждому объекту из списка в JSON
    for (let obj of data) {
      // Создаем новый узел списка
      const newNode = {
        data: obj,
        next: null
      };
  
      // Если текущий узел еще не определен, устанавливаем его в качестве головы списка
      if (!currentNode) {
        currentNode = newNode;
        head = newNode;
      } else {
        // Иначе, связываем новый узел со следующим узлом текущего узла
        currentNode.next = newNode;
        currentNode = newNode;
      }
    }
  
    // Возвращаем голову списка
    return head;
  }
  
  // Экспортируем функцию
  module.exports = jsonToList;
  