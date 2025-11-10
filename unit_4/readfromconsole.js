const fs = require('fs');
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function writeToFile(data) {
    fs.writeFile('hi.txt', data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Data written to hi.txt successfully');
        }
        r1.close();
    });
}

r1.question('Enter student name:',(name)=>{
    r1.question('Enter subject:',(subject)=>{
        r1.question('Enter marks:',(marks)=>{
            const data=`student name:${name}\nsubject:${subject}\nMarks:${marks}`
            writeToFile(data);
            r1.close();
        });
    });
});
