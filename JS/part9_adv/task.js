/*
Asynchronous JavaScript with Event Loop
Task 1: Simulating Asynchronous Behavior

Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.

Use setTimeout to simulate this behaviour.



Task 2: Simulate Multiple Async Tasks with Different Delays

Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).

Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.



Task 3: Async Task with Callback Function

Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).

Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
*/
function simulateAsyncTask(){
    console.log('Task started')
    setTimeout(() => {
        console.log('Task finished')
    }, 2000);
}
// simulateAsyncTask()
function simulateMultipleTasks(){
    console.log('Task started')
    setTimeout(() => {
        console.log('Task 1 finished')
    }, 1000);
    setTimeout(() => {
        console.log('Task 2 finished')
    }, 2000);
    setTimeout(() => {
        console.log('Task 3 finished')
    }, 3000);
}
// simulateMultipleTasks()
function callback(){
    console.log('fetched successfully')
}
function fetchDataWithCallback(callback){
    console.log('fetching started')
    setTimeout(() => {
        callback()
    }, 2000);
}
// fetchDataWithCallback(callback)