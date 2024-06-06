var a=145;
var sum=0;
while(a>0){

    last=a%10;
    sum=sum+last;
    a=parseInt(a)
    a=a/10;

}
console.log(sum);