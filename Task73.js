var person={
    firstname :"john",
    lastname:"Doe",
    fullname:function(){
        return this.firstname+""+this.lastname;
    }
}
var member={
    firstname :"hege ",
    lastname :"nilson",
}
let fullname=person.fullname.bind(member)
console.log(fullname());