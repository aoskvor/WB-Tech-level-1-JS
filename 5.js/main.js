// Подключаем модуль
const jsonToList = require('./list');

// Пример JSON списка объектов
const json = '[{"name": "John", "age": 25}, {"name": "Jane", "age": 30}, {"name": "Bob", "age": 40}]';

// Преобразуем JSON в связный список
const linkedList = jsonToList(json);

// Выводим список
let currentNode = linkedList;
while (currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
