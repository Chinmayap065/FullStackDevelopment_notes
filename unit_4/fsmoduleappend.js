var fs=require('fs');
fs.appendFile('hello.txt','good day!!',function(err){
    if(err){
        console.error('Error writing to file:',err);
    }else{
        console.log('File successfully!');
    }
})