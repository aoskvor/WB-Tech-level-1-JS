function createAndAppendTemplate() {
    // Создаем элемент-шаблон с помощью тега <template>
    const template = document.createElement('template');
  
    // Задаем содержимое элемента-шаблона
    template.innerHTML = `
      <div class="new-element">
        <h1>New Element</h1>
        <p>This is a new element created using templates.</p>
      </div>
    `;
  
    // Клонируем содержимое элемента-шаблона
    const clone = template.content.cloneNode(true);
  
    // Находим элемент, к которому будем добавлять новый элемент
    const parentElement = document.querySelector('#parent-element');
  
    // Добавляем клонированное содержимое в родительский элемент
    parentElement.appendChild(clone);
  }
  
  // Вызываем функцию для создания и добавления нового элемента
  createAndAppendTemplate();
 
  
  //В этом примере мы создаем новый элемент-шаблон с помощью тега `<template>`, задаем его содержимое с помощью свойства `innerHTML`, клонируем содержимое элемента-шаблона с помощью метода `cloneNode()`, находим родительский элемент, к которому будем добавлять новый элемент, и добавляем клонированное содержимое в родительский элемент с помощью метода `appendChild()`.
  
  