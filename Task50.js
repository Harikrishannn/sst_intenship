function greet(name,callback){
    console.log("hello "+name+"!")
    callback();

}
function sayback (){
    console.log("goodbaye")
}
greet("alice ",sayback)

// function call back