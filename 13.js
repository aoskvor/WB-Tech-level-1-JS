class Shape {
    constructor() {
      this.name = 'Shape';
    }
  
    calculateArea() {
      throw new Error('Method not implemented.');
    }
  
    calculatePerimeter() {
      throw new Error('Method not implemented.');
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.name = 'Rectangle';
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.name = 'Circle';
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Triangle extends Shape {
    constructor(side1, side2, side3) {
      super();
      this.name = 'Triangle';
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    calculateArea() {
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
  
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  // Пример использования
  const rectangle = new Rectangle(4, 5);
  console.log(rectangle.calculateArea()); // 20
  console.log(rectangle.calculatePerimeter()); // 18
  
  const circle = new Circle(3);
  console.log(circle.calculateArea()); // 28.274333882308138
  console.log(circle.calculatePerimeter()); // 18.84955592153876
  
  const triangle = new Triangle(3, 4, 5);
  console.log(triangle.calculateArea()); // 6
  console.log(triangle.calculatePerimeter()); // 12
  