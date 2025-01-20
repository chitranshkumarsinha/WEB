// While both normal functions and constructor functions are technically just JavaScript functions, their use cases and behaviors differ significantly. Constructor functions are specifically designed for creating and initializing objects, while normal functions are general-purpose tools for performing tasks or calculations.
function person(name,age){
    this.name = name
    this.age = age
}
function car(make,model){
    this.make = make
    this.model = model
}

let mycar = new car("Toyota","Camry")
// console.log(mycar);



function tea(type){
    this.type = type
    this.describe = function(){
        return `this is a cup of ${this.type}`
    }
}
let lemontea = new tea('lemontea')
// console.log(lemontea.describe())



function animal(species){
    this.species = species
}
animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}
let dog = new animal('dog')
// console.log(dog.sound());
// console.log(dog);




function drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name = name
}
// let Tea = new drink('tea')
// let Coffee = drink('coffee')
