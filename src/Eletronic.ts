import Item from "./Item";

export default class Eletronic extends Item {
  constructor(description: string, price: number) {
    super("Eletronic", description, price);
  }
  calculateTaxes(): number {
    return this.price * 0.5
  }
}
