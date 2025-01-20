//part1
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let count = 1;
            if(count) resolve({name: "chitransh"})
            else reject({name: "tukku"})
            
        },2000)
    })
}

async function getData(){
    try {
        console.log("fetching user data...");
        const userdata = await fetchData()
        console.log("user data fetched successfully")
        console.log("user data: ",userdata)
        // you can use await only inside async
    } catch (error) {
        console.log("Error fetching data",error)
    }
}
// getData()



//part2
function fetchpostdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data fetches")
        },2000)
    })
}
function fetchcommentdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment Data fetches")
        },3000)
    })
}
async function getBlogData(){
    try{
        console.log("fetching blog data")

        // const postdata = await fetchpostdata()
        // const commentdata = await fetchcommentdata()

        // instead of doing what we have done in above two line, we can also write the given code

        const [postdata,commentdata] = await Promise.all([
            fetchpostdata(),
            fetchcommentdata()
        ]);

        //using promise.all helps to reduce time as the total time taken to complete all promise is the max of time required for each promise whereas in case where await functions run seperately total time will sum of times in each promises which is long
        //promise.all runs all promises parallely

        console.log(postdata)
        console.log(commentdata)
        console.log("fetch complete");       
    } catch(error){
        console.log("Error fetching blog data");

    }

    // if any promise throw error then async function will throw error

}
getBlogData()


function sinha(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // let name = 'tukku'
            let name = 'mukku'
            if(name=='tukku') resolve(`name is ${name}`)
            else reject(`name is incorrect, it's not ${name}`)
        },2000)
    })
}

async function out(){
    try {
        console.log('loading...');
        const output = await sinha();
        console.log('successfull');
        console.log(output)
    } catch (error) {
        console.log(error)
    }
}
// out()








// function fetchpostdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Post Data fetches")
//         },2000)
//     })
// }
// function fetchcommentdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("Comment Data fetches")
//         },3000)
//     })
// }
// async function getBlogData(){
//     try{
//         console.log("fetching blog data")

//         // const postdata = await fetchpostdata()
//         // const commentdata = await fetchcommentdata()

//         // instead of doing what we have done in above two line, we can also write the given code

//         const [postdata,commentdata] = await Promise.all([
//             fetchpostdata(),
//             fetchcommentdata()
//         ]);

//         console.log(postdata)
//         console.log(commentdata)
//         console.log("fetch complete");       
//     } catch(error){
//         console.log("Error fetching blog data");

//     }
// }
// getBlogData()