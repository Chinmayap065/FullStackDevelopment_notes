var fs=require('fs');
fs.unlink('hello.txt',function(err){
    console.log('Deleted')
})