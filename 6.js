const arrayOfObjects = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 30 },
    { name: 'Robert', age: 20 },
    { name: 'John', age: 20 },
    { name: 'Anna', age: 25 }
  ];
  
  arrayOfObjects.sort((a, b) => {
    if (a.age === b.age) {
      return a.name.localeCompare(b.name);
    }
    return a.age - b.age;
  });
  
  console.log(arrayOfObjects);
  