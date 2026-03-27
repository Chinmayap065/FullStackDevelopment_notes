const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Event listener
function greetUser(name) {
    console.log(`name: ${name}`);
}

// Register event listener
eventEmitter.on('greet', greetUser);

// Emit event
eventEmitter.emit('greet', 'alice');

eventEmitter.off('greet', greetUser);
eventEmitter.emit('greet', 'bob');

eventEmitter.on('error', (err) => {
    console.log('Error handled:', err.message);
});
eventEmitter.emit('error', new Error('An error occurred!'));
//groped event emitter
eventEmitter.on('welcome',()=>{console.log('w1')});
eventEmitter.on('welcome',()=>{console.log('w1')});
eventEmitter.on('welcome',()=>{console.log('w1')});
eventEmitter.on('welcome',()=>{console.log('w1')});
eventEmitter.emit('welcome');

eventEmitter.once('start',()=>{
    console.log('This will run only once (start event).');
});
eventEmitter.emit('start');
eventEmitter.emit('start');