// let sum = 0
// let i = 0
// while(i<=5){
//     sum+=i
//     i++
// }
// // console.log(sum)

// i--
// count = []
// while(i>0){
//     count.push(i)
//     i--
// }
// // console.log(count)


// //run on browser
// // let tea = []
// // let ask
// // do {
// //     ask = prompt(`Enter your favourite tea ("type stop to finish this loop"): `)
// //     if(ask.toLowerCase()!=='stop') tea.push(ask)
// // } while (ask.toLowerCase() !=='stop');
// // console.log(tea);


// let total = 0
// let num = 1;
// do {
//   total += num
//   num++  
// } while (num <= 3);
// // console.log(total);


// let a = [2,4,6]
// let mul = []
// // a.forEach(element => {
// //     element*=2
// //     mul.push(element)
// // });
// // console.log(mul);

// for (let c=0;c<a.length;c++) {
//     mul.push(a[c]*2)
// }
// // console.log(mul);

// city = ['paris','new york','tokyo','london']
// citylist = []
// for(let co = 0;co<city.length;co++){
//     citylist.push(city[co])
// }
// console.log(citylist);

///
///
///
//TEN LOOP CHALLENGES

let colour = ['green','blue','black','white','purple']

let selected = []
let another = []
for(let i = 0;i<colour.length;i++){
    if(colour[i] === 'black') break;
    else selected.push(colour[i])
}
// console.log(selected);

for(let i = 0;i<colour.length;i++){
    if(colour[i].toLowerCase() === 'black') continue;
    else another.push(colour[i])
}
// console.log(another);

let num = [1,2,3,4,5]
let num1  = []
for (let i of num) {
    if(i == 4) break;
    else num1.push(i)
}
// console.log(num1);

let population = {
    'london' : 890,'new york'  : 840,'berlin' : 350,'paris' : 220,
};
let population1 = {}
//keys of object need not to be accessed in the order in which it is inserted
for (const key in population) {
    if(key == 'berlin') break;
    else{
        population1[key] = population[key]
    }
}
// console.log(population1);


// colour.forEach(element => {
//     console.log(element);
// });

num.forEach(function (x){
    x=x*2
    console.log(x);
})
