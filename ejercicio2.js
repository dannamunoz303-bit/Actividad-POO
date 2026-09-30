/**
 * Ejercicio 2: Clase Rectangle con área y perímetro
 * Conceptos: clases, métodos, validación en setters (encapsulación).
 */
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.width = width;   // usa el setter para validar
    this.height = height;
  }

  get width() { return this.#width; }
  set width(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("El ancho debe ser un número positivo");
    }
    this.#width = value;
  }

  get height() { return this.#height; }
  set height(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("El alto debe ser un número positivo");
    }
    this.#height = value;
  }

  // Área = ancho * alto
  calculateArea() { return this.#width * this.#height; }

  // Perímetro = 2 * (ancho + alto)
  calculatePerimeter() { return 2 * (this.#width + this.#height); }
}

// --- Pruebas ---
const rect = new Rectangle(8, 5);
console.log(`Ancho: ${rect.width}, Alto: ${rect.height}`);
console.log(`Área: ${rect.calculateArea()}`);           // 40
console.log(`Perímetro: ${rect.calculatePerimeter()}`); // 26

// Prueba de validación
try {
  new Rectangle(-3, 4);
} catch (e) {
  console.log("Error esperado:", e.message);
}
