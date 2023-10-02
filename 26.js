function traverseDOM(node) {
    // выполняем определенное действие с текущим узлом, например, выводим информацию о теге в консоль
    console.log(node.tagName);
  
    // проверяем, есть ли у текущего узла дочерние элементы
    if (node.hasChildNodes()) {
      // получаем всех дочерних элементов текущего узла
      const children = node.childNodes;
  
      // проходимся по каждому дочернему элементу рекурсивно вызывая функцию traverseDOM
      for (let i = 0; i < children.length; i++) {
        if (children[i].nodeType === Node.ELEMENT_NODE) {
          traverseDOM(children[i]);
        }
      }
    }
  }
  
  // пример использования функции
  const startingElement = document.getElementById('starting-element');
  traverseDOM(startingElement);

  
// В этом примере функция `traverseDOM` принимает параметр `node`, который представляет текущий узел дерева DOM. Она сначала выполняет определенное действие с текущим узлом (в данном случае, просто выводит информацию о теге в консоль). Затем она проверяет, есть ли у текущего узла дочерние элементы. Если есть, то получает всех дочерних элементов и рекурсивно вызывает функцию `traverseDOM` для каждого из них. Обратите внимание, что мы проверяем тип узла, чтобы исключить текстовые узлы, комментарии и другие типы узлов, кроме элементов.
  