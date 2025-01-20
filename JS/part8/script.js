// alert('connected')
/*DOM manipulation
get the element
event listening
learn about events
*/

//example 1
// document.getElementById("changetextbutton").
// addEventListener("click",function(){
//     console.log(this);    
// })

//code given below and above have different meanings

// document.getElementById("changetextbutton").
// addEventListener("click",() => {
//     console.log(this);
// })


document.getElementById("changetextbutton").
addEventListener("click",function(){
    let paragraph = document.getElementById("paragraph")
    // console.log(paragraph);
    // console.log(paragraph.textContent) 
    paragraph.textContent = "this paragraph is changed"
})

//example2
document.getElementById('highlightcity').addEventListener('click',function(){
    let citylist = document.getElementById('citieslist')
    citylist.firstElementChild.classList.add('highlight')
})

//example3
document.getElementById('changeorder').addEventListener('click',function(){
    let coffeetype = document.getElementById('coffeetype')
    coffeetype.textContent = 'Espresso'
    coffeetype.style.backgroundColor = 'brown'
})

//example4

document.getElementById('addnewitem').addEventListener('click',function(){
    let newitem = document.createElement('li')
    newitem.textContent = 'Eggs'
    document.getElementById('shoppinglist').appendChild(newitem)
})

//example5
document.getElementById('removelastTask').addEventListener('click',function(){
    let tasklist = document.getElementById('tasklist')
    tasklist.lastElementChild.remove()
})

//example6
document.getElementById('clickmebutton').addEventListener('click',function(){
    alert('chaicode')
})

//example7
document.getElementById('tealist').addEventListener('click',function(event){
    //event.target clicks that particular item inside id 'tealist' where the user clicks
    if(event.target && event.target.matches('.teaitem')){
        alert('you selected ' + event.target.textContent)
    }  

})

//example8
document.getElementById('feedbackform').addEventListener('submit',function(event){
    event.preventDefault()
    let feedback = document.getElementById('forminput').value;
    if(feedback){
        document.getElementById('formdisplay').textContent = `Feedback is: ${feedback}`
    }
    else document.getElementById('formdisplay').textContent = 'You have not entered anything !!'

})
// find how to grab label


//example9
document.addEventListener('DOM content loaded',function(){
    document.getElementById('domstatus').textContent = 'DOM fully loaded'
})

//example10
document.getElementById('togglehighlight').addEventListener('click',function(){
    let descriptiontext = document.getElementById('descriptiontext')
    // descriptiontext.classList.add('highlight')
    descriptiontext.classList.toggle('highlight')
})







// //PRACTICE
// document.getElementById('changetextbutton').addEventListener('click',function(){
//     document.getElementById('paragraph').textContent = 'pararaph is changed'
// })

// document.getElementById('highlightcity').addEventListener('click',function(event){
//     let listt = document.getElementById('citieslist')
//     listt.firstElementChild.classList.add('highlight')
// })

// document.getElementById('addnewitem').addEventListener('click',function(){
//     let shop = document.getElementById('shoppinglist')
//     let newitem = document.createElement('li')
//     newitem.textContent = 'chicken'
//     shop.appendChild(newitem)
// })

// document.getElementById('removelastTask').addEventListener('click',function(){
//     document.getElementById('tasklist').lastElementChild.remove()
// })

// document.getElementById('tealist').addEventListener('click',function(event){
//     if(event.target){
//         event.target.classList.toggle('highlight')
//     }
// })

// document.getElementById('feedbackform').addEventListener('submit',function(event){
//     event.preventDefault()
//     let grab = document.getElementById('forminput').value
//     let res = document.getElementById('formdisplay')
//     res.textContent = `feedback is: ${grab}`
// })

// document.getElementById('removelastTask').addEventListener('click',function(){
//     document.getElementById('tasklist').lastElementChild.remove()
// })


/*

Closures in JavaScript
Task 1: Creating a Counter Using Closures

Create a function createCounter() that returns a function which increments and returns a counter value each time it is called.



Task 2: Rate Limiter Function

Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".



Task 3: Memoization Function

Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.








Prototypal Inheritance in JavaScript
Task 1: Create Inheritance Using Prototypes

Create a constructor Animal with a method makeSound(). Then create a constructor Dog that inherits from Animal and adds a method bark()



Task 2: Shape and Rectangle Inheritance

Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

Create another constructor Rectangle that inherits from Shape and adds properties width and height. Add a method getArea() to Rectangle that returns the area of the rectangle.







Async-Await and Promise.all
Task 1: Async-Await with Promise.all

Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()



Task 2: Error Handling in Async/Await with Promise.all

Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.



Task 3: Timeout with Async/Await and Promise.race

Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".







Iterators and Generators in JavaScript
Task 1: Creating a Simple Generator

Create a generator function numberGenerator() that yields numbers from 1 to 3.



Task 2: Create a Custom Iterator

Create a custom iterator called rangeIterator(start, end) that returns an object that iterates over numbers from start to end.

Each call to .next() should return the next number in the range until it reaches end.



Task 3: Generator Function for Fibonacci Sequence

Create a generator function fibonacciGenerator() that yields numbers from the Fibonacci sequence indefinitely (1, 1, 2, 3, 5, 8, etc.).

Use the next() method to get the next Fibonacci number.









*/





