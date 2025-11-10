const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your name: ', name => {
    console.log(`Hello, ${name}!`);
    readline.close();
});


//sum
let a=parseInt(process.argv[2]);
let b=parseInt(process.argv[3]);

let sum=a+b;
console.log("The sum is:",sum);