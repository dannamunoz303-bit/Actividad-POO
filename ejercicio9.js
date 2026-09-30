/**
 * Ejercicio 9: Bank con gestión de sucursales
 * Conceptos: composición (un banco tiene sucursales), encapsulación de la lista.
 */
class Bank {
  #name;
  #branches = []; // lista privada de sucursales

  constructor(name) {
    this.#name = name;
  }

  get name() { return this.#name; }

  addBranch(branch) {
    if (this.#branches.includes(branch)) {
      console.log(`La sucursal "${branch}" ya existe.`);
      return;
    }
    this.#branches.push(branch);
    console.log(`Sucursal "${branch}" agregada.`);
  }

  removeBranch(branch) {
    const index = this.#branches.indexOf(branch);
    if (index === -1) {
      console.log(`La sucursal "${branch}" no existe.`);
      return;
    }
    this.#branches.splice(index, 1);
    console.log(`Sucursal "${branch}" eliminada.`);
  }

  displayBranches() {
    console.log(`Sucursales de ${this.#name}:`);
    if (this.#branches.length === 0) {
      console.log("  (sin sucursales)");
      return;
    }
    this.#branches.forEach((b, i) => console.log(`  ${i + 1}. ${b}`));
  }
}

// --- Pruebas ---
const bank = new Bank("Banco Andino");
bank.addBranch("Popayán Centro");
bank.addBranch("Cali Norte");
bank.addBranch("Bogotá Chapinero");
bank.addBranch("Cali Norte");      // duplicada
bank.displayBranches();
bank.removeBranch("Cali Norte");
bank.removeBranch("Medellín");     // no existe
bank.displayBranches();
