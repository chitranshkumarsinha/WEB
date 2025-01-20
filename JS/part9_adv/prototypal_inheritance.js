function person(name){
    this.name = name;
}
person.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
    
}
let tukku = new person('tukku')
tukku.greet()
// console.log(Object.getPrototypeOf(person))