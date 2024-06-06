const person={
    fullName:function(city,country){
        return this.firstName+" "+this.lastName+","+city+","+country
    }
}
const person1={
    firstName:"john",
    lastName:"Doe",
}
console.log(person.fullName.apply(person1,["India","Norvay"]));
