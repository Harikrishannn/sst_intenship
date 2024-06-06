const n1=require("readline").createInterface
({
    input:process.stdin,
    output:process.stdout,

})
    n1.question("enter the  first number ",(a) =>     {
    function digit(a){
    
   
            var sum=0;
            while(a>0){
            
                last=a%10;
                sum=sum+last;
                a=  parseInt(a)
                a=a/10;
            
            }
            console.log(sum);
    }
    digit(a)    
        })
       
