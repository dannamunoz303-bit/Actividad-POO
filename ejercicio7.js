/**
 * Ejercicio 7: Book y Ebook
 * Conceptos: herencia, sobrescritura del método de visualización.
 */
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayDetails() {
    return `Título: ${this.title}, Autor: ${this.author}, Año: ${this.year}`;
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price;
  }

  // Sobrescribe para incluir el precio
  displayDetails() {
    return `${super.displayDetails()}, Precio: $${this.price.toFixed(2)}`;
  }
}

// --- Pruebas ---
const book = new Book("Cien años de soledad", "Gabriel García Márquez", 1967);
const ebook = new Ebook("Clean Code", "Robert C. Martin", 2008, 29.99);

console.log(book.displayDetails());
console.log(ebook.displayDetails());
