/**
 * Ejercicio 8: Animal y Dog
 * Conceptos: herencia, sobrescritura y polimorfismo.
 */
class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`El ${this.species} hace: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(color) {
    super("perro", "Guau"); // especie y sonido fijos para Dog
    this.color = color;
  }

  // Sobrescribe incluyendo el color del perro
  makeSound() {
    console.log(`El ${this.species} de color ${this.color} hace: ${this.sound}`);
  }
}

// --- Pruebas ---
const cat = new Animal("gato", "Miau");
const dog = new Dog("café");

cat.makeSound();
dog.makeSound();

// Polimorfismo
[cat, dog].forEach((a) => a.makeSound());
