const n1=require("readline").createInterface
({
    input:process.stdin,
    output:process.stdout,

})
    n1.question("Enter the l \n",(num1) => {
    n1.question("Enter the b  \n",(num2) => {

        a=parseFloat(num1)
        b=parseFloat(num2)

        function area (a,b){
            let c ; 
            c=a*b;
            console.log(c);
        }
        area (a,b)
        n1.close()
    })
})
