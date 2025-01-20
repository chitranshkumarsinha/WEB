// const person = {
//     name : "tukku",
//     greet(){
//         console.log(`Hi , I am ${this.name}`);
        
//     }
// }
// person.greet()

// const greetFunction = person.greet
// greetFunction()  
//When you assign person.greet to greetFunction, the context (this) is lost because greetFunction is called as a standalone function.

// const boundgreet = person.greet.bind({name: 'john'}) 
// const boundgreet = person.greet.bind(person) // we can access the whole obect again too
//The bind method allows you to explicitly set the value of this for a function. It returns a new function with the specified this context.
// boundgreet()



/*
    The methods .bind(), .call(), and .apply() in JavaScript are used to explicitly set the value of this for a function. 
*/

const person = {
    name : "tukku",
    title : "sinha",
    greet(greeting, punctuation){
        console.log(`${greeting}, I am ${this.name} ${this.title} ${punctuation}`);
    }
}
const bound = person.greet.bind({name: "john",title: "patil"},'hello','bii');
bound();
person.greet.call({name: "john",title: "patil"},'hello','bii');
person.greet.apply({name: "john",title: "patil"},['hello','bii']);


/*

Method	 Calls Immediately?	       Arguments Passed	        Returns a Function?

.bind()	         No                Individually	            Yes
.call()		     Yes               Individually	            No             
.apply()	     Yes		       As an array              No         

*/



/*

When to Use Each:
Use .bind() when:
You need to create a new function with a fixed this value and reuse it later.
Example: Event handlers or callbacks.

Use .call() when:
You need to call a function immediately with a specific this value.
Arguments are passed individually.

Use .apply() when:
You need to call a function immediately, and the arguments are already in an array format.
Example: Useful for functions like Math.max that take multiple arguments.

*/