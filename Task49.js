function OuterFunction(){
    let outerVariable="i am outside"

    function innerVariable(){
        console.log(outerVariable)
    }
    return innerVariable;
}
const myCloser=OuterFunction();
myCloser();