import Item from "./Item";

export default class Order {
  code: string;
  items: Item[];
  constructor() {
    this.code = `${Math.floor(Math.random() * 1000)}`;
    this.items = [];
  }
  addItem(item: Item) {
    this.items.push(item);
  }
  getsubTotal() {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }
  getTaxes() {
    let taxes = 0;
    for (let item of this.items) {
      taxes += item.calculateTaxes();
    }
    return taxes;
  }
}
