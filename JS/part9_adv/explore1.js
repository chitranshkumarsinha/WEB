function sayhello(){
    console.log('i would like to say hello');
    
}
function sayhii(){
    console.log('Hii, this is ck sinha this side');
    
}

console.log('chitransh');

setTimeout(()=>{
    sayhii()
},3000)

setTimeout(()=>{
    sayhello()
},2000)

for(let i = 0;i<=10;i++){
    console.log('Tukku')
}



/*
Visualization of Call Stack, Queue, and Event Loop

At Start:
Call Stack: console.log('chitransh')
Queue: Empty.
Output: chitransh.

During Loop:
Call Stack: console.log('Tukku') (repeated for each iteration).
Queue: Empty.
Output: Tukku (11 times).

After 2 Seconds:
Call Stack: Empty → Callback sayhello added to stack.
Queue: Empty (after moving sayhello).
Output: i would like to say hello.
After 3 Seconds:

Call Stack: Empty → Callback sayhii added to stack.
Queue: Empty (after moving sayhii).
Output: Hii, this is ck sinha this side.

This is how the Call Stack, Queue, and Event Loop handle the execution of your code!
*/




/*
------------.       ------------------------------------.
|call stack  |     | browser/execution engine/environment|
------------.       ------------------------------------.


all functions that are going to be executed go to call stack and 'event loop' manages to execute the functions and remove them from call stack if any timer function is pushed into the stack that timer function goes to 'execution engine ' and it sends it to queue after it is cooked means ready to be executed.
from queue these cooked functions are sent to call stack and then executed.
Tasks in the queue wait until the call stack is empty before being executed.

-----------.     --------.   
event loop |     | queue |
-----------.     --------. 
*/





/*
NOTE:-
A setTimeout callback will never interrupt the execution of synchronous code. It is always executed after the current synchronous operations in the Call Stack are completed, regardless of how long those operations take. This is due to the design of the Event Loop in JavaScript.
*/