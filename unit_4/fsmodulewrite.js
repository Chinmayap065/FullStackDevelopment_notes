const fs = require('fs');
fs.writeFile('hello.txt','hello world',function(err){
    if(err){
        console.error('Error writing to file:',err);
    }else{
        console.log('File successfully!');
    }
})