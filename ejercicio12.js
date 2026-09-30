/**
 * Ejercicio 12: University con gestión de departamentos
 * Conceptos: composición, encapsulación de la lista de departamentos.
 */
class University {
  #name;
  #departments = [];

  constructor(name) {
    this.#name = name;
  }

  get name() { return this.#name; }

  addDepartment(department) {
    if (this.#departments.includes(department)) {
      console.log(`El departamento "${department}" ya existe.`);
      return;
    }
    this.#departments.push(department);
    console.log(`Departamento "${department}" agregado.`);
  }

  removeDepartment(department) {
    const index = this.#departments.indexOf(department);
    if (index === -1) {
      console.log(`El departamento "${department}" no existe.`);
      return;
    }
    this.#departments.splice(index, 1);
    console.log(`Departamento "${department}" eliminado.`);
  }

  displayDepartments() {
    console.log(`Departamentos de ${this.#name}:`);
    if (this.#departments.length === 0) {
      console.log("  (sin departamentos)");
      return;
    }
    this.#departments.forEach((d, i) => console.log(`  ${i + 1}. ${d}`));
  }
}

// --- Pruebas ---
const uni = new University("Universidad del Cauca");
uni.addDepartment("Ingeniería");
uni.addDepartment("Ciencias de la Salud");
uni.addDepartment("Artes");
uni.addDepartment("Artes");        // duplicado
uni.displayDepartments();
uni.removeDepartment("Artes");
uni.removeDepartment("Derecho");   // no existe
uni.displayDepartments();
