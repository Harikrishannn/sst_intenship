
function carprice(price){
   car.price=20000;
    console.log("inside the value",price)
}
let car ={
    model:"swift",
    price:25000,
}
console.log("Before function call,CAR model: ",car.model);
console.log("brfore function call,Car price ",car.price);
carprice(car);
console.log("after function call, car model: ",car.model);
console.log("after function call, car price: ",car.price);