// first class function

const greet=function(name){
    return"hello;"+name+"!";
};
    function displayGreeting(greetingFunction)
    {
        console.log(greetingFunction("john"));
    }

console.log(greet("alice"));
displayGreeting(greet);
