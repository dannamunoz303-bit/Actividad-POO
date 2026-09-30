/**
 * Ejercicio 6: Employee y Manager con cálculo de salario
 * Conceptos: herencia, sobrescritura, super, polimorfismo.
 */
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary; // salario mensual
  }

  // Salario anual = salario mensual * 12
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department;
    this.bonus = bonus; // bono anual
  }

  // Sobrescribe: salario anual del empleado + bono del gerente
  calculateAnnualSalary() {
    return super.calculateAnnualSalary() + this.bonus;
  }
}

// --- Pruebas: dos instancias de Manager ---
const manager1 = new Manager("Laura Pérez", 5000, "Ventas", 8000);
const manager2 = new Manager("Carlos Ruiz", 6500, "Tecnología", 12000);
const employee = new Employee("Sofía Díaz", 3000);

[manager1, manager2].forEach((m) =>
  console.log(`${m.name} (${m.department}): salario anual = $${m.calculateAnnualSalary()}`)
);
console.log(`${employee.name} (empleado): salario anual = $${employee.calculateAnnualSalary()}`);
