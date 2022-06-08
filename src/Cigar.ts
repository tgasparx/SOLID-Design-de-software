import Item from "./Item";

export default class Cigar extends Item {
  constructor(description: string, price: number) {
    super("cigar", description, price);
  }
  calculateTaxes(): number {
    return this.price * 0.2
  }
}
