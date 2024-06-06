const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    })

r1.question("Please enter your name: ",(a) => {
    const myfun=function(a)
    {
        var closee;
        closee = a;
        return closee;
    };
    var abc=myfun(a);
   
    console.log("hello "+abc)
    r1.close()
    

})



