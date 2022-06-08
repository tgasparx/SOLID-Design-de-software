import Cigar from "./Cigar";
import Order from "./Order";

export function Teste<VoidFunction>(nome: string){
    const order = new Order()
    order.addItem(new Cigar("Marlboro", 10))
    const subtotal = order.getsubTotal()
    console.log(subtotal)
}














// import Item from "./Item";
// import Order from "./Order";

//  export function Teste<VoidFunction>(Nome: string) {
//     const order = new Order();
//     order.addItem(new Item("cigar","marlboro", 10)) 
//     let subtotal = order.getsubTotal()
//     console.log(subtotal)
// }
// Teste("teste")

