var book = {
    title: "",
    author: "",
    year: 0,
    
    // Методы для получения значений свойств книги
    getTitle: function() {
      return this.title;
    },
    getAuthor: function() {
      return this.author;
    },
    getYear: function() {
      return this.year;
    },
  
    // Методы для изменения значений свойств книги
    setTitle: function(newTitle) {
      this.title = newTitle;
    },
    setAuthor: function(newAuthor) {
      this.author = newAuthor;
    },
    setYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  // Пример использования методов объекта "книга"
  book.setTitle("JavaScript: The Good Parts");
  book.setAuthor("Douglas Crockford");
  book.setYear(2008);
  
  console.log(book.getTitle()); // Выводит "JavaScript: The Good Parts"
  console.log(book.getAuthor()); // Выводит "Douglas Crockford"
  console.log(book.getYear()); // Выводит 2008
  