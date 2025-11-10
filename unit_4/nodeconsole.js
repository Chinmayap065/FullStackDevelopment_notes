console.time("Execution Time");

console.log('Start loging');
console.info('Information message');
console.warn("Warning message");
const name="john smith";
console.error(`user ${name} is found `);
console.group("Group example");
console.log("Msg1 inside the group");
console.log("Msg2 inside the group");
console.groupEnd();

const x=5;
//only prints false saatement
console.assert(x>10,"x is not greater than 10");

console.assert(x<10,'x is not less than 10');

const users=[
    {name:'Rayan',age:25},
    {name:'Bob',age:30},
    {name:'sam',age:25}
];
console.table(users);
console.table(users,['name']);

const someDebugInfo='Debuuging error';
console.debug('Debeguing details:',someDebugInfo);

console.timeEnd("Execution Time");
