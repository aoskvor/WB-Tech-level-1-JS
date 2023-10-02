function addElementWithStyle(tagName, styles) {
    // создаем новый элемент с указанным тегом
    var newElement = document.createElement(tagName);
    
    // добавляем новый элемент в DOM
    document.body.appendChild(newElement);
    
    // устанавливаем стиль для нового элемента
    Object.assign(newElement.style, styles);
  }
  
  // вызываем функцию с указанием тега и стиля
  addElementWithStyle('div', {
    width: '200px',
    height: '100px',
    background: 'red'
  });
  