// call by value

function changeCarPrice(carprice)
{
    carprice=250000;
    console.log("inside the car price change",carprice)
}
let carprice=20000;
console.log("before car price",+carprice);
changeCarPrice(carprice);
console.log("after function call ",carprice)