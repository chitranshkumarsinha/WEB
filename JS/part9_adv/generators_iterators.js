function* numbergenerator(){
    yield 1
    yield 2
    yield 3
    yield 4
}

let gen = numbergenerator();
let gen2 = numbergenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);