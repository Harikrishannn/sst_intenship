function hasProperty(obj,prop){
    for(var key in obj){
        if(key===prop){
            return true;
        }
    }
    return  false;
}
 var person={
    name1: "john",
    age: 30,
    occupaction : "engineer",
 }
 var res=hasProperty(person,"name1")
 if (res===true)
    {
        console.log("persent" )
    }
    else{
        console.log("not persent")
    }