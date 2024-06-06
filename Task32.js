const n1=require("readline").createInterface
({
    input:process.stdin,
    output:process.stdout,

})
    n1.question("enter the  first number ",(num1) => {
    n1.question("enter the second number ",(num2) => {

        a=parseFloat(num1)
        b=parseFloat(num2)

    function product(a,b){
        let C
        c=a*b
        console.log(c)

    }product(a,b)
    n1.close()
})
    })