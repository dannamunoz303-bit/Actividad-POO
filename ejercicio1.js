/**
 * Ejercicio 1: Clase Person con detalles
 * Conceptos: clases, constructor, encapsulación (campos privados + getters).
 */
class Person {
  // Campos privados (#): solo accesibles dentro de la clase (encapsulación)
  #name;
  #age;
  #country;

  constructor(name, age, country) {
    this.#name = name;
    this.#age = age;
    this.#country = country;
  }

  // Getters: permiten leer los datos sin exponer los campos privados
  get name() { return this.#name; }
  get age() { return this.#age; }
  get country() { return this.#country; }

  // Muestra los detalles de la persona
  displayDetails() {
    console.log(`Nombre: ${this.#name}, Edad: ${this.#age}, País: ${this.#country}`);
  }
}

// --- Pruebas: dos instancias ---
const person1 = new Person("Ana Gómez", 28, "Colombia");
const person2 = new Person("John Smith", 35, "Estados Unidos");

person1.displayDetails();
person2.displayDetails();
