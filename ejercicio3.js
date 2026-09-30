/**
 * Ejercicio 3: Vehicle y Car con herencia
 * Conceptos: herencia (extends), super, sobrescritura de métodos (polimorfismo).
 */
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Devuelve la descripción del vehículo
  displayDetails() {
    return `Marca: ${this.make}, Modelo: ${this.model}, Año: ${this.year}`;
  }
}

// Car hereda de Vehicle y agrega el número de puertas
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year); // llama al constructor de la clase padre
    this.doors = doors;
  }

  // Sobrescribe el método del padre agregando las puertas
  displayDetails() {
    return `${super.displayDetails()}, Puertas: ${this.doors}`;
  }
}

// --- Pruebas ---
const vehicle = new Vehicle("Yamaha", "MT-07", 2022);
const car = new Car("Toyota", "Corolla", 2023, 4);

console.log(vehicle.displayDetails());
console.log(car.displayDetails());

// Polimorfismo: el mismo método se comporta distinto según el objeto
[vehicle, car].forEach((v) => console.log("->", v.displayDetails()));
console.log("car es instancia de Vehicle:", car instanceof Vehicle); // true
