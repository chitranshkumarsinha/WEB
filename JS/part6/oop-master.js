//learn about object oriented programming and try to make digital notes on topic you are studying
// oops -> encapsulation,inheritance,polymorphism,and abstraction

//PART - 1

let car = {
    make: 'toyota',
    model: 'cambry',
    year: 2020,
    start: function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
// console.log(car.start());
function person(name,age){
    this.name = name
    this.age = age

}
let john = new person('john',30)
// console.log(john.name);


// prototype chain   (read about it)
function animal (type){
    this.type = type
}
animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}
Array.prototype.sinha = function(){
    return `Custom method ${this}`
}
let myarray = [1,2,3]
// console.log(myarray.sinha());

class vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends vehicle{
    drive(){
        return `${this.make} : This is an inheritance example`
    }
}
let mycar = new Car('tata','safari')
// console.log(mycar.start());
// console.log(mycar.drive());

let vehicle1 = new vehicle('Toyota','cambry')
// console.log(vehicle1.make);  







//practice question

// let details = {
//     name : 'chitransh',
//     college: 'iiit ranchi',

//     printt: function(){
//         return `${this.name} studys in ${this.college}`
//     }
// }
// console.log(details.printt());

class details{
    constructor(naam,college){
        this.id = naam
        this.college = college
    }
    
    printt = function(){
        return `${this.id} studys in ${this.college}`
    }
}
let tukku = new details('chitransh','iiit ranchi')
// console.log(tukku.printt());

class info extends details{
    gender = 'male'
    extra_info(){
        return `${this.id} is a ${this.gender} studys in ${this.college}`
    }
}
let tukku_new = new info('chitransh','iiit ranchi')
// console.log(tukku_new.extra_info());
// console.log(tukku_new.printt());






//PART - 2
//Encapsulation
class bankaccount {
    #balance = 5 // this # make sure that this is not accessible by anyone, to access this a custom method has to be provided
    deposit(amount){
        this.#balance += amount 
        return this.#balance
    }
    
    getbalance(){
        return  `$ ${this.#balance}`
    }
}
let account = new bankaccount()
// console.log(account.balance);
// console.log(account.getbalance());


//Abstraction
class coffemachine{
    start(){
        return `Starting the machine....`
    }
    brewcoffee(){
        return `Brewing coffee`
    }
    press_start(){
        let message1 = this.start()
        let message2 = this.brewcoffee()
        return `${message1} and ${message2}`
    }
}
let mymachine = new coffemachine()
// console.log(mymachine.start());
// console.log(mymachine.brewcoffee());
// console.log(mymachine.press_start());


//Polymorphism
class Bird{
    fly(){
        return `Flying ....`
    }

}
class Penguin extends Bird{
    fly(){
        return `penguins can't fly`
    }
}
let bird = new Bird()
// console.log(bird.fly());
let penguin = new Penguin()
// console.log(penguin.fly())


//Static method
class Calculator{
    static add(a,b){
        return a+b
    }
    //static is a method which can be called by only class
}
let minicalc = new Calculator()
// console.log(minicalc.add(2,3));
// console.log(Calculator.add(2,3));


//Getter and setters 
class Employee{
    #salary
    constructor(name,salary){
        if(salary<0){ throw new Error('salary cannot be negative')}
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `you are not allowed to see salary`
    }

    set salary(value){
        if(value<0) console.error("Invalid salary")
        else this._salary = value
    }
}
let emp = new Employee('Alice',-50000)
console.log(emp.salary);
emp.salary = 600000
