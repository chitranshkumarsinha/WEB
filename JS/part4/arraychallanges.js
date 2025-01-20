// let tea = ['black tea','green tea','oolong tea']
let tea = new Array('black tea','green tea','oolong tea')
// let first_tea = tea[0]
// console.log(first_tea);

// tea[1] = 'jasmine tea']
tea.push('jasmine tea')
// console.log(tea.length);
let last = tea.pop()
// console.log(tea);
// console.log(last)

// let tea_softcopy = tea
// tea.pop()
// console.log(tea);
// console.log(tea_softcopy);

let tea_hardcopy  = [...tea]
// let tea_hardcopy  = tea.slice()
// tea.pop()
// console.log(tea);
// console.log(tea_hardcopy)

let coffee = new Array('normal coffee','Black coffee','Cold coffee')
// let Merge = tea.concat(coffee)  
// console.log(Merge);

let isinlist = tea.includes('green tea')
// console.log(isinlist);
// console.log(tea.indexOf('green tea'))

// console.log(tea.join(' and '));

// tea.shift()
// console.log(tea);

// let neww = tea.reverse()
// console.log(neww);
// console.log(tea)

