//read docs about object class based and prototype based
let computer = {cpu : 12,ram : 64 }
let lenovo = {
    screen : 'HD',
    __proto__: computer,
    // above mentioned method is used to access every properties inside protoype computer, this symbol is called as Dunder(double "_" => "__")
};
let hardware = {};
// console.log(`lenovo `,lenovo.__proto__);
// console.log(`lenovo `,Object.getPrototypeOf(lenovo)); (other method)
// console.log(`computer `,computer.__proto__);


// other methods 
let lenovo1 = {
    screen : 'HD',
};
Object.setPrototypeOf(lenovo1,computer)
console.log(`lenovo `,Object.getPrototypeOf(lenovo1))
