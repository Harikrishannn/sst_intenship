let course=["HTML","CSS","JAVASCRIPT","REACT","NODE.JS","c++"]
console.log("orginal array : "+course);


//let lastElement=course.pop();
//console.log("After removed the last element"+course)

//let firstElement=course.shift();
//console.log("after removed the first element "+course)

course.splice(1,4);
console.log("after removed 2 elements string from index 1: "+course)