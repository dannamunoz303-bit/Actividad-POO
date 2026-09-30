/**
 * Ejercicio 11: BankAccount con transferencias entre cuentas
 * Conceptos: encapsulación, colaboración entre objetos.
 */
class BankAccount {
  #accountNumber;
  #holderName;
  #balance;

  constructor(accountNumber, holderName, balance = 0) {
    this.#accountNumber = accountNumber;
    this.#holderName = holderName;
    this.#balance = balance;
  }

  get accountNumber() { return this.#accountNumber; }
  get holderName() { return this.#holderName; }
  get balance() { return this.#balance; }

  deposit(amount) {
    if (amount <= 0) return console.log("Monto inválido para depósito.");
    this.#balance += amount;
    console.log(`${this.#holderName}: depósito de $${amount}. Saldo: $${this.#balance}`);
  }

  // Devuelve true si el retiro fue exitoso
  withdraw(amount) {
    if (amount <= 0) {
      console.log("Monto inválido para retiro.");
      return false;
    }
    if (amount > this.#balance) {
      console.log(`${this.#holderName}: fondos insuficientes (saldo $${this.#balance}).`);
      return false;
    }
    this.#balance -= amount;
    console.log(`${this.#holderName}: retiro de $${amount}. Saldo: $${this.#balance}`);
    return true;
  }

  // Transfiere dinero a otra cuenta: retira aquí y deposita allá
  transfer(amount, targetAccount) {
    if (!(targetAccount instanceof BankAccount)) {
      console.log("La cuenta destino no es válida.");
      return false;
    }
    if (this.withdraw(amount)) {
      targetAccount.deposit(amount);
      console.log(`Transferencia de $${amount} de ${this.#holderName} a ${targetAccount.holderName} completada.`);
      return true;
    }
    console.log("Transferencia cancelada.");
    return false;
  }
}

// --- Pruebas ---
const accA = new BankAccount("A-001", "María López", 1000);
const accB = new BankAccount("B-002", "Pedro Martínez", 500);
const accC = new BankAccount("C-003", "Lucía Torres");

accA.deposit(250);
accB.withdraw(100);
accA.transfer(400, accB);   // exitosa
accB.transfer(5000, accC);  // fondos insuficientes
accC.deposit(75);

console.log("\nSaldos finales:");
[accA, accB, accC].forEach((a) => console.log(`${a.holderName}: $${a.balance}`));
