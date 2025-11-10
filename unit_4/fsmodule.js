const fs = require('fs');

fs.readFile('hello.txt', 'utf8', function (err, data) {
    if (err) {
        console.error('Error1111 reading file:', err);
    } else {
        console.log('File contains (async):', data);
    }
});
