let fruits=["apple","banana","grapes","dragonfruit"];
console.log(fruits);
console.log("Orange");
console.log("After push('orange'):",fruits);

fruits.pop();
console.log("After pop():",fruits);

fruits.shift();
console.log("After shift():",fruits);


fruits.unshift("Mango");
console.log("After unshift('Mango'):",fruits);


let tropicalFruits=["Pineapple","Papaya"];
let allFruits=fruits.concat(tropicalFruits);
console.log("After concat with tropicalFruits:",allFruits);

console.log("forEach() output:");
allFruits.forEach(function(fruit){
    console.log(fruit);
});

allFruits.reverse();
console.log("After reverse():",allFruits);

allFruits.sort();
console.log("After sort():",allFruits);



