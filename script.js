let cart = [];

function ToCart(item,price){
    let input = prompt("How many?(Numbers only)");
    for(let i = 0; i < input; i++){
    let selected = {
        Item:item,
        Price:price
    }
    cart.push(selected);
}
}

function Checkout(){
    console.log(cart);
    let total =0;
    cart.forEach((c)=>{
        total += c.Price;
    });
    tax = total * 0.06;
    total += tax;
    console.log("Sales tax: " + tax);
    console.log("Total :$" + total);
}