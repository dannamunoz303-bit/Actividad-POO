/**
 * Ejercicio 4: BankAccount con depósito y retiro
 * Conceptos: encapsulación (saldo privado), validaciones, métodos.
 */
class BankAccount {
  #accountNumber;
  #balance; // privado: solo se modifica mediante deposit() y withdraw()

  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
  }

  get accountNumber() { return this.#accountNumber; }
  get balance() { return this.#balance; }

  deposit(amount) {
    if (amount <= 0) {
      console.log("El monto a depositar debe ser mayor que 0.");
      return false;
    }
    this.#balance += amount;
    console.log(`Depósito de $${amount} en la cuenta ${this.#accountNumber}. Saldo: $${this.#balance}`);
    return true;
  }

  withdraw(amount) {
    if (amount <= 0) {
      console.log("El monto a retirar debe ser mayor que 0.");
      return false;
    }
    if (amount > this.#balance) {
      console.log(`Fondos insuficientes en la cuenta ${this.#accountNumber}. Saldo: $${this.#balance}`);
      return false;
    }
    this.#balance -= amount;
    console.log(`Retiro de $${amount} en la cuenta ${this.#accountNumber}. Saldo: $${this.#balance}`);
    return true;
  }
}

// --- Pruebas: varias instancias ---
const account1 = new BankAccount("001-123", 1000);
const account2 = new BankAccount("002-456");

account1.deposit(500);
account1.withdraw(300);
account1.withdraw(5000); // fondos insuficientes
account2.deposit(200);
account2.withdraw(50);
account2.deposit(-10);   // monto inválido
