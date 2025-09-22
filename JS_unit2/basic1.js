console.log("Hello, World!");

// decimal numbers
console.log(323)
//binary numbers
console.log(0b11);
//string
console.log("student");
//null
let val=null;
console.log(val);
//undefined
let undefinedValue
console.log(undefinedValue);
//object
let person={
    name:'rahul',
    age:21,
    usn:4,

};
console.log(person);


console.log("firstname:",person.firstName);


person.age=80;
person["occupation"]="Manager";
person.address={
    street:"MG road",
    city:"Bangalore",
    pincode:560001
};
console.log("after adding nested address:",person);

console.log("nested address:",person.address);
console.log("nested city:",person.address.city);
console.group("zipcode:",person["adderess"]["pincode"]);


