const student1 = {
    firstName: "Raj",
    lastName: "Kumar"
}

const student2 = {
    firstName: "Sathish",
    lastName: "Kumaar"
}

const printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

//call method
//Call invokes the function and allows you to pass in arguments one by one.
printFullName.call(student1, "Coimbatore", "Tamilnadu");
printFullName.call(student2, "Salam", "Tamilnadu");

//apply method
//Apply invokes the function and allows you to pass in arguments as an array.
printFullName.apply(student1, ["Coimbatore", "Tamilnadu"]);
printFullName.apply(student2, ["Salam", "Tamilnadu"]);

//bind method
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.
const myName1 = printFullName.bind(student1, "Coimbatore", "Tamilnadu");
const myName2 = printFullName.bind(student2, "Coimbatore", "Tamilnadu");
myName1();
myName2();
