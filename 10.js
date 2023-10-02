function convertToJson(string) {
    let json;
  
    // Проверка на необходимые условия и валидацию
    try {
      json = JSON.parse(string);
    } catch (error) {
      console.error('Error parsing string to JSON:', error);
      return null;
    }
  
    // Возвращение JSON
    return json;
  }
  
  // Пример использования функции convertToJson
  const string = '{"key": "value"}';
  const json = convertToJson(string);
  console.log(json); // {key: "value"}
  