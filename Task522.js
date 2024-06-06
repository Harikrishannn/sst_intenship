// higer class
function applyoperation (value,operator){
    return operator (value);
}
function double (num){
    return num*2;
}
console.log(applyoperation(4,double));