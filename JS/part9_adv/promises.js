// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success = true;
//             if(success) {
//                 resolve("Data fetched successfully")
//             }
//             else{
//                 reject("Error fetching data")
//             }
//         },2000)
//     })
// }

// // fetchData()
// //     .then((data)=>{console.log(data)}) // then catches output of resolve
// //     .catch((data)=>{console.log(data)}); // catch catches output of reject


// fetchData()
//     .then((data)=>{
//         console.log(data);
//         return `Chitransh`
//     })
//     .then((value)=>{
//         console.log(value)
//     }) // this then catches output from previous then 
//     .catch((data)=>{console.log(data)});


// let newpromise = new Promise((resolve,reject) => {
//     let x = 1;
//     if(x) resolve('Successfull');
//     else reject('Failure')
// })

// newpromise
// .then((data)=>{
//     console.log(data);  
// })
// .catch((data)=>{
//     console.log(data);
// })
