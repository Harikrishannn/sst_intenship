const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    })

r1.question("Enter the radius ",(ab) => {
    r= parseFloat(ab) 
    function area(r)
    {
        var ans;
        ans=Math.PI*Math.pow(r,2);
        return ans;
    }
    var result=area(r);
    console.log(result);
})
