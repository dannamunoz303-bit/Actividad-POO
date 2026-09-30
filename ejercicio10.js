/**
 * Ejercicio 10: Product y PersonalCareProduct
 * Conceptos: herencia, sobrescritura, super.
 * Supuesto: la garantía añade un costo del 5% del subtotal por cada año.
 */
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Precio total = precio * cantidad
  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  static WARRANTY_RATE_PER_YEAR = 0.05;

  constructor(id, name, price, warrantyYears) {
    super(id, name, price);
    this.warrantyYears = warrantyYears;
  }

  // Sobrescribe: subtotal + costo de garantía
  calculateTotalPrice(quantity) {
    const subtotal = super.calculateTotalPrice(quantity);
    const warrantyCost =
      subtotal * PersonalCareProduct.WARRANTY_RATE_PER_YEAR * this.warrantyYears;
    return subtotal + warrantyCost;
  }
}

// --- Pruebas ---
const soap = new Product(1, "Jabón", 3.5);
const shaver = new PersonalCareProduct(2, "Afeitadora eléctrica", 80, 2);

console.log(`${soap.name} x4 = $${soap.calculateTotalPrice(4).toFixed(2)}`);           // 14.00
console.log(`${shaver.name} x2 (garantía ${shaver.warrantyYears} años) = $${shaver.calculateTotalPrice(2).toFixed(2)}`); // 160 + 16 = 176.00
