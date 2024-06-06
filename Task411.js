const r1=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
    })

r1.question("Enter your dob",(dob) => {
const today= new Date()
const age=today.getUTCFullYear()-dob

console.log(age)
r1.close();
})
