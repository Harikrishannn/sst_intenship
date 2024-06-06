// call by refernce

function modifyobject(Obj){
    Obj.value=100;
    console.log(Obj.value)
}
let myObj={value:50}
console.log("before",myObj.value);
modifyobject(myObj)
console.log(myObj)