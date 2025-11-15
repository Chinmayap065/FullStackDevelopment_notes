const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
//1.basic event emissin and listening
eventEmitter.on('greet',(name,age)=>{
    console.log(`hello,${name}! and your age is ${age}`);
});
eventEmitter.emit('greet','Alice',30);
eventEmitter.emit('greet','Bob',40);

//2.Multiple listerners for same Event
eventEmitter.on('welcome',()=>console.log('Welcome listener 1 trigger'));
eventEmitter.on('welcome',()=>console.log('Welcome listener 2 trigger'));
eventEmitter.on('welcome',()=>console.log('Welcome listener 3 trigger'));
eventEmitter.on('welcome',()=>console.log('Welcome listener 4 trigger'));
eventEmitter.emit('welcome');

//3.One time listner using .once()
eventEmitter.once('start',()=>{
    console.log('This will run only once (start event).');
});
eventEmitter.emit('start');
eventEmitter.emit('start');
eventEmitter.emit('start');

//4.event remover

function sayBye(){
    console.log('goodbye event triggered!');
}
eventEmitter.on('bye',sayBye);
eventEmitter.emit('bye');
eventEmitter.off('bye',sayBye);
eventEmitter.emit('bye')


//5.Handling Error
eventEmitter.on('error',(err)=>{
    console.log('⚠️  Error handled:',err.message);

});
eventEmitter.emit('error',new Error('Something went wrong!'));