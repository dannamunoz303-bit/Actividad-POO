/**
 * Ejercicio 5: Shape, Circle y Triangle
 * Conceptos: herencia, polimorfismo, clase "abstracta" simulada.
 */
class Shape {
  constructor() {
    // Evita instanciar Shape directamente (simula una clase abstracta)
    if (new.target === Shape) {
      throw new Error("Shape es abstracta: no se puede instanciar directamente");
    }
  }

  // Las subclases deben sobrescribir este método
  calculateArea() {
    throw new Error("calculateArea() debe ser implementado por la subclase");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  // Área = π * r²
  calculateArea() { return Math.PI * this.radius ** 2; }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  // Área = (base * altura) / 2
  calculateArea() { return (this.base * this.height) / 2; }
}

// --- Pruebas ---
const circle = new Circle(5);
const triangle = new Triangle(6, 4);

console.log(`Área del círculo (r=5): ${circle.calculateArea().toFixed(2)}`);   // 78.54
console.log(`Área del triángulo (b=6, h=4): ${triangle.calculateArea()}`);      // 12

// Polimorfismo: se trata a todas las figuras como Shape
[circle, triangle].forEach((s) =>
  console.log(`${s.constructor.name}: ${s.calculateArea().toFixed(2)}`)
);

try {
  new Shape();
} catch (e) {
  console.log("Error esperado:", e.message);
}
