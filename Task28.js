const n1=require("readline").createInterface
({
    input:process.stdin,
    output:process.stdout,

})
var name
var age


n1.question("enter your name : ", (name) => {
n1.question("enter your age : ",(age) => { 

    function display(){

        console.log("Your name is "+name+" your age is "+age)
        n1.close()
       

    }
    display ();
})
})