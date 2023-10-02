function multipleFunctions(funcArray) {
    return function() {
      const results = [];
      for(let i = 0; i < funcArray.length; i++) {
        results.push(funcArray[i]());
      }
      return results;
    }
  }
  
  // Пример использования
  const addOne = function () { return 1 + 1; };
  const multiplyByTwo = function () { return 2 * 2; };
  const subtractThree = function () { return 10 - 3; };
  
  const functionsArray = [addOne, multiplyByTwo, subtractThree];
  
  const resultFunction = multipleFunctions(functionsArray);
  const result = resultFunction();
  console.log(result); // [2, 4, 7]
  