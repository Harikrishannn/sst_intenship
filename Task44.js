// palindrome


const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    })
r1.question("enter the word to check palindrome: ",(name) => {

const myfun=function(name){

    var ab =(name)
    var bc = name.split('').reverse().join('');

    if(ab===bc){
       
        dc =(name + " is a palindrome");
        return dc;
    }
    else{
      
        dc=(name+" not palindrome");
        return dc;

    }
    }
    var dc;
    var result =myfun(name)
    console.log(result)
    r1.close()
})

