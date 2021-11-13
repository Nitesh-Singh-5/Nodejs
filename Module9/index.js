// event module
import EventEmitter from 'events';

// Creating classes 
class MyEmitter extends EventEmitter { }

// Craeting Object
const myEmitter = new MyEmitter();

// Example 1
// Register Event Listener
// myEmitter.on('event', () => {
//     console.log('An Event occured !');
// });

// // Trigger Event
// myEmitter.emit('event');


// Example 2
// Register Event Listener
let m = 0;
myEmitter.once('event', () => {
    console.log(++m);
});

// Trigger Event
myEmitter.emit('event');
myEmitter.emit('event');