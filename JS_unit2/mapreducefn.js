let numbers = [1,2,3,4,5,6,7,8,9,10];

let oddNumbers = numbers.filter(n => n % 2 !== 0);
const sum = numbers.reduce((sum,n)=>sum+n,0);
console.log("Sum of doubled odd numbers:",sum);
console.log("Odd Numbers:",oddNumbers);



let doubledOddNumbers = oddNumbers.map(n => n * 2);
console.log("Doubled Odd Numbers:",doubledOddNumbers);

